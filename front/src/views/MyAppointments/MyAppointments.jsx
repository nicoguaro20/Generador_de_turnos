import { useEffect } from "react";
import Appointment from "../../components/Appointment/appointment";
import axios from "axios";
import style from "./MyAppointments.module.css";
import { useUser } from "../../context/userContext";
import { useNavigate, Link } from "react-router-dom";

const MyAppointments = () => { 
    const navigate = useNavigate();
    const { user, setUserAppointments, userAppointments } = useUser();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/users/${user.id}`);
                setUserAppointments(response.data.appointments);
            } catch (error) {
                console.log(error);
            }
        };

        if (!user.name) {
            navigate("/newappointment");
        } else {
            fetchData();
        }
    }, [user.name, setUserAppointments, navigate]);

    return (
        <div className={style.appointmentsDiv}>
            <h1>My Appointments</h1>

            <Link to="/newappointment">
                <p className={style.newAppointment}>New Appointment</p>
            </Link>

            {
                userAppointments.length ? (
                    userAppointments.map((appointment) => (
                        <Appointment key={appointment.id}
                            id={appointment.id}
                            date={appointment.date}
                            time={appointment.time}
                            description={appointment.description}
                            status={appointment.status}
                        />
                    ))
                ) : (
                    <div className={style.noAppointments}>No tienes ningún turno</div>
                )
            }
        </div>
    )
};

export default MyAppointments;