import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { isValidTime, isWeekDay } from "../../helpers/validate";
import style from "./NewAppointment.module.css";
import axios from "axios";

const NewAppointment = () => {
    const navigate = useNavigate();
    const { user } = useUser();

    useEffect(() => {
        !user.name && navigate("/");
    }, [user.name, navigate]);

    const initialValue = {
        date: "",
        time: "",
        description: ""
    }

    const [formData, setFormData] = useState(initialValue);
    const [errors, setErrors] = useState({});

    const postData = async () => {
        try {
            await axios.post(`http://localhost:3002/appointments/schedule`, {
                date: formData.date,
                time: formData.time,
                description: formData.description,
                userId: user.id
            });
            alert("Appointment created");
            navigate("/appointments");
        } catch {

        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
    }

    const convertTo24HourFormat = (time) => {
        const [hours, minutes] = time.split(":");
        return `${hours}:${minutes}`;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: name === 'time' ? convertTo24HourFormat(value) : value
        });
    }

    const isFormValid = formData.date && formData.time && formData.description && !errors.date && !errors.time;

    useEffect(() => {
        if (formData.date && !isWeekDay(formData.date)) {
            setErrors({ ...errors, date: "Is not a valid day" });
        } else if (formData.time && !isValidTime(formData.time)) { // Asegurarse de que la validación del tiempo es correcta
            setErrors({ ...errors, time: "Is not a valid time, choose between 8:00 and 17:00" });
        } else {
            setErrors({ date: "", time: "" });
        }
    }, [formData]);

    return (
        <div className={style.newAppointmentDiv}>
            <h1>New Appointment</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date: </label>
                    <input
                        type="date"
                        name="date"
                        onChange={handleChange}
                        value={formData.date}
                    />
                    {errors.date && <span>{errors.date}</span>}
                </div>

                <div>
                    <label>Time: </label>
                    <input
                        type="time"
                        name="time"
                        onChange={handleChange}
                        value={formData.time}
                    />
                    {errors.time && <span>{errors.time}</span>}
                </div>

                <div>
                    <label>Description: </label>
                    <input
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={formData.description}
                    />
                </div>

                {isFormValid && (
                    <button className={style.buttonDiv} type="submit">Create</button>
                )}
            </form>
        </div>
    );
}

export default NewAppointment;