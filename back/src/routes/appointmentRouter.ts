import { Router } from "express";
import { getAllAppointments, getAppointmentsById, inactiveAppointment, schedule } from "../controllers/appointmentsController";

const appointmentRouter: Router = Router();
appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:id",getAppointmentsById);
appointmentRouter.post("/schedule",schedule);
appointmentRouter.put("/cancel/:id",inactiveAppointment);

export default appointmentRouter;