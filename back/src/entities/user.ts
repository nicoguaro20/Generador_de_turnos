import { Entity,  PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany} from "typeorm";
import Appointment from "./appointments";
import Credential from "./credential";

@Entity("user")
class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		length: 100
	})
	name: string;

	@Column()
	email: string;

	@Column({
        type: "timestamp"
    })
	birthdate: Date;

	@Column()
	nDni: string;

	@Column()
	credentialId: number;

	@OneToOne(() => Credential)
	@JoinColumn()
	Credential: Credential

	@OneToMany(() => Appointment,(appointment) => appointment.user)
	appointments: Appointment[]
};

export default User;