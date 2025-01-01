import { React, useState, useEffect } from "react";
import { validateLogin } from "../../helpers/validate";
import axios from "axios"

const Login = () => {
    const initialValues = {
        username: "",
        password: "",
    }

    const [formData, setFormData] = useState(initialValues)
    const [errors, setErrors] = useState(initialValues)
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    useEffect(()=>{
        const errors = validateLogin(formData)
        setErrors(errors);

    },[formData])

    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
    }

    const postData = async () => {
        try{
            const response = await axios.post("http://localhost:3002/users/login", formData)
            if (response.status === 200){
                alert("User logged succesfully")
            } else {
                alert("User not logged succesfully")
            }

        }catch (error){
            console.log(error)
            alert("User not logged successfully")
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="user@gmail.com"
                        value= {formData.username}
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
                        value= {formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>

                <button disabled={ errors.username || errors.password} type="submit">Login</button>
            </form>
        </div>
    )
};

export default Login;