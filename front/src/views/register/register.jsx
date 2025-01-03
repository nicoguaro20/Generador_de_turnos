import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateRegister } from '../../helpers/validate';
import axios from "axios";
import style from "./register.module.css";


const Register = () => {
    const postData = async (formData) => {
        try{
            const response = await axios.post("http://localhost:3002/users/register", formData)
            if(response.status === 200){
                alert("User registered successfully");
            } else {
                alert("User registration failed");
            }
        } catch (error) {
            console.error(error)
            alert("User registration failed")
        }
    }

    return (
        <div className={style.registerContainer}>
            <h1>Register form</h1>
            <Formik
            initialValues={{ name: '', email: '', birthdate: '', nDni: '', username: '', password: '' }}
            validate={ validateRegister }
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
                        <Field className={style.field_1} type="text" name="name" placeholder="Nombre completo"/>
                        <ErrorMessage name="email" component="div" />
                    </div>

                    <div>
                        <label>Email: </label>
                        <Field className={style.field_1} type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>

                    <div>
                        <label>Birthdate: </label>
                        <Field className={style.field_2} type="date" name="birthdate" />
                        <ErrorMessage name="birthdate" component="div" />
                    </div>

                    <div>
                        <label>nDni: </label>
                        <Field className={style.field_2} type="text" name="nDni" />
                        <ErrorMessage name="nDni" component="div" />
                    </div>

                    <div>
                        <label>Username: </label>
                        <Field className={style.field_1} type="text" name="username" />
                        <ErrorMessage name="username" component="div" />
                    </div>

                    <div>
                        <label>Password: </label>
                        <Field  className={style.field_1} type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>

                <button type="submit" disabled={isSubmitting || errors.username || errors.password}>
                    Submit
                </button>
                </Form>
            )}
            </Formik>
        </div>
    )
};

export default Register;