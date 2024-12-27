import { Request, Response } from "express";
import { getAllAppointmentService, getAppointmentByIdService,createAppointmentService, cancelAppointmentService } from "../services/appointmentsService";
import IAppointmentDto from "../dto/IAppointmentDto";
import  Appointment from "../entities/appointments";

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await getAllAppointmentService(); 
        res.status(200).json(appointments)
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
};

export const getAppointmentsById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment: Appointment = await getAppointmentByIdService(Number(id));
        res.status(200).json(appointment);

     } catch (error: any) {
        res.status(400).json({error: error.message})
     }
};

export const schedule = async (req: Request , res: Response) => {
    try {
        const { date, time, status, userId, description }: IAppointmentDto = req.body;
        const newAppointment: Appointment = await createAppointmentService({
            date, time, status, userId, description
        })
        res.status(201).json(newAppointment)
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
};

export const inactiveAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const newAppointment: Appointment = await cancelAppointmentService(Number(id));
        res.status(200).json(newAppointment)
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
};