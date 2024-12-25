import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("credential")

class Credential {
	@PrimaryGeneratedColumn({
        type: "int",
    })
	id: number;

	@Column({
		length: 100
    })
	username: string;

	@Column({
        select: false
    })
	password: string;
};

export default Credential;