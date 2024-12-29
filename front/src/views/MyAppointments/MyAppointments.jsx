import { useState } from "react";
import MyAppointmentsPreLoad from "../../helpers/MyAppointments";
import Appointment from "../../components/Appointment/appointment";


const MyAppointments = () => {
    const [ appointments, setAppointments] = useState(MyAppointmentsPreLoad);
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