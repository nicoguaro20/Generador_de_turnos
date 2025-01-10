import { React, useState, useEffect } from "react";
import { validateLogin } from "../../helpers/validate";
import axios from "axios";
import style from "./login.module.css";
import { useUser } from "../../context/userContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useUser();
    const initialValues = {
        username: "",
        password: "",
    }

    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    useEffect(() => {
        setErrors(validateLogin(formData));
    }, [formData]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        postData();
    }

    const postData = async () => {
        try {
            const response = await axios.post("http://localhost:3002/users/login", formData);
            if (response.status === 200) {
                setUser(response.data.user);
                alert("User logged successfully");
                navigate("/home");
            } else {
                alert("User not logged successfully");
            }
        } catch (error) {
            console.log(error);
            alert("User not logged successfully");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className={style.loginContainer}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <span>{errors.username}</span>}
                </div>

                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="**********"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>

                <button className={style.buttonDiv} disabled={isSubmitting || Object.keys(errors).length > 0} type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;