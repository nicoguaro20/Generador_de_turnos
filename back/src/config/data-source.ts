import { DataSource } from "typeorm";
import { PORT, DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } from "./envs";
import User from "../entities/user";
import Appointment from "../entities/appointments";
import Credential from "../entities/credential";

export const AppDataSource = new DataSource({
    type: "postgres",
	host: DB_HOST || "localhost",
	port: DB_PORT || 5432,
	username: DB_USERNAME,
	password: DB_PASSWORD,
	database: DB_NAME,
	synchronize: true,
	logging: false,
	entities: [Appointment, Credential, User],
	subscribers: [],
	migrations: [],
})

export const UserModel = AppDataSource.getRepository(User);
export const CredentialModel = AppDataSource.getRepository(Credential);
export const AppointmentModel = AppDataSource.getRepository(Appointment);