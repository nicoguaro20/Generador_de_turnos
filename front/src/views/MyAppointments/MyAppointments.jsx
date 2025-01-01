import { useState, useEffect } from "react";
import Appointment from "../../components/Appointment/appointment";
import axios from "axios";

const MyAppointments = () => {
    const [ appointments, setAppointments] = useState([]);
    
    //MONTAJE DEL COMPONENTE//

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get("http://localhost:3002/appointments")
                setAppointments(response.data)
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();

    }, [])

    return(
        <div>
            <h1>My Appointments</h1>
            {
                appointments.length ? (
                    appointments.map((appointment) => {
                        return(
                            <Appointment key = {appointment.id}
                                date = {appointment.date}
                                time = {appointment.time}
                                description = {appointment.description}
                                status = {appointment.status}
                            />
                        )

                    })
                ) : (
                    <div>No tienes ningún turno</div>
                )
            }
        </div>
    )
};

export default MyAppointments;