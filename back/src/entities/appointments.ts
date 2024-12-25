import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import User from "./user";

@Entity("appointments")
class Appointment {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "timestamp"
	})
	date: Date;

	@Column()
	subject: string;

	@Column({
		default: "Active"
	})
	status: string;

	@Column()
	description: string;

	@ManyToOne(() => User, (user) => user.appointments) 
	user: User

};

export default Appointment;