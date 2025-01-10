import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateRegister } from '../../helpers/validate';
import axios from "axios";
import style from "./register.module.css";


const Register = () => {
    const postData = async (formData) => {
        try {
            const response = await axios.post("http://localhost:3002/users/register", formData);
            if (response.status === 200) {
                alert("User registered successfully");
            } else {
                alert("User registration failed");
            }
        } catch (error) {
            console.error(error);
            alert("User registration failed");
        }
    };

    return (
        <div className={style.registerContainer}>
            <h1>Register form</h1>
            <Formik
                initialValues={{ name: '', email: '', birthdate: '', nDni: '', username: '', password: '' }}
                validate={validateRegister}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    postData(values);
                    setSubmitting(false);
                    resetForm();
                }}
            >
                {({ isSubmitting, errors }) => (
                    <Form>
                        <div>
                            <label>Name: </label>
                            <Field className={style.field_1} type="text" name="name" placeholder="Full name" />
                            <ErrorMessage className={style.errorDiv} name="name" component="h3" />
                        </div>

                        <div>
                            <label>Email: </label>
                            <Field className={style.field_1} type="email" name="email" placeholder="Email address" />
                            <ErrorMessage className={style.errorDiv} name="email" component="h3" />
                        </div>

                        <div>
                            <label>Birthdate: </label>
                            <Field className={style.field_2} type="date" name="birthdate" />
                            <ErrorMessage className={style.errorDiv} name="birthdate" component="div" />
                        </div>

                        <div>
                            <label>nDni: </label>
                            <Field className={style.field_2} type="text" name="nDni" placeholder="DNI Number" />
                            <ErrorMessage className={style.errorDiv} name="nDni" component="h3" />
                        </div>

                        <div>
                            <label>Username: </label>
                            <Field className={style.field_1} type="text" name="username" placeholder="Username" />
                            <ErrorMessage className={style.errorDiv} name="username" component="div" />
                        </div>

                        <div>
                            <label>Password: </label>
                            <Field className={style.field_1} type="password" name="password" placeholder="Password" />
                            <ErrorMessage className={style.errorDiv} name="password" component="div" />
                        </div>

                        <button className={style.buttonDiv} type="submit" disabled={isSubmitting || Object.keys(errors).length > 0}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;