import style from "./appointment.module.css";
import axios from "axios";
import { useUser } from "../../context/userContext";

const Appointment = ({ date, description, status, time, id }) => {
    const { userAppointments, setUserAppointments } = useUser();

    const cancelAppointment = async () => {
        try {
            const response = await axios.put(`http://localhost:3002/appointments/cancel/${id}`);
            if (response.status === 200) {
                const newAppointments = userAppointments.map(appointment => {
                    if (appointment.id === id) {
                        return { ...appointment, status: "Cancelled" };
                    }
                    return appointment;
                });
                setUserAppointments(newAppointments);
            }
        } catch (error) {
            console.log(error);
            alert("Failed to cancel appointment");
        }
    }

    return (
        <div className={style.appointmentContainer}>
            <div className={style.generalContainer}>
                <div className={style.dateContainer}>
                    <h2 className={style.dateTitleContainer}>Fecha y hora:</h2>
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
                <p className={style.pContainer}>Description: {description}</p>
                <p className={style.pContainer}>Status: {status}</p>
            </div>
            {status !== "Cancelled" && (
                <button onClick={cancelAppointment}>Cancel</button>
            )}
        </div>
    );
};

export default Appointment;