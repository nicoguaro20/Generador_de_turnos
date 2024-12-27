import { Router } from "express";
import { getAllAppointments, getAppointmentsById, inactiveAppointment, schedule } from "../controllers/appointmentsController";

const appointmentRouter: Router = Router();
appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:id",getAppointmentsById);
appointmentRouter.post("/shedule",schedule);
appointmentRouter.post("/cancel/:id",inactiveAppointment);

export default appointmentRouter;