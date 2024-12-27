import { AppointmentModel } from "../config/data-source";
import { UserModel } from "../config/data-source";
import IAppointmentDto from "../dto/IAppointmentDto";
import Appointment from "../entities/appointments";
import User from "../entities/user";


export const getAllAppointmentService =  async (): Promise<Appointment[]> => {
    const appointments: Appointment[] = await AppointmentModel.find();
    return appointments;
};

export const getAppointmentByIdService = async (id: number): Promise<Appointment> => {
    const foundAppointment = await AppointmentModel.findOneBy({id});
    if(!foundAppointment) throw Error("El turno solicitado no ha sido encontrado");
    return foundAppointment
};

export const createAppointmentService = async (createAppointmentDto: IAppointmentDto) => {
    const newAppointment: Appointment = await AppointmentModel.create(createAppointmentDto);
    const user: User = await UserModel.findOneBy({id: createAppointmentDto.userId});
    newAppointment.user = user;
    await AppointmentModel.save(newAppointment);
    return newAppointment;
};

export const cancelAppointmentService = async (appointmentId: number) => {
    const foundAppointment = await AppointmentModel.findOneBy({id: appointmentId});
    if (!foundAppointment) throw Error("El turno ingresado no existe");
    foundAppointment.status = "Cancelled";
    await AppointmentModel.save(foundAppointment);
    return foundAppointment;
};