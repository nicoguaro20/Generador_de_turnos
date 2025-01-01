import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateRegister } from '../../helpers/validate';
import axios from "axios";


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
        <div>
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
                    <label>Name: </label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="email" component="div" />

                    <label>Email: </label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />

                    <label>Birthdate: </label>
                    <Field type="date" name="birthdate" />
                    <ErrorMessage name="birthdate" component="div" />

                    <label>nDni: </label>
                    <Field type="text" name="nDni" />
                    <ErrorMessage name="nDni" component="div" />

                    <label>Username: </label>
                    <Field type="text" name="username" />
                    <ErrorMessage name="username" component="div" />

                    <label>Password: </label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
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