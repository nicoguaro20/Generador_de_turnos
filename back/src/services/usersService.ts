import { UserModel } from "../config/data-source";
import User from "../entities/user";
import UserDto from "../dto/UserDto";
import Credential from "../entities/credential";
import  { createCredential } from "./credentialsService"

export const createUserService = async (createUserDto: UserDto) => {
    const newCredential: Credential = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password
    })
    const newUser: User = await UserModel.create(createUserDto);
    newUser.Credential = newCredential;
    await UserModel.save(newUser);
    return newUser;
};

export const getAllUsersService = async(): Promise<User[]> => {
    const users = await UserModel.find();
    return users;
};

export const getUserByIdService = async(id: number): Promise<User> => {
    const foundUser: User = await UserModel.findOne({where: {id}, relations: ["appointments"]})
    if (!foundUser) throw Error("El Usuario no fue encontrado");
    return foundUser;
};

export const findUser = async(credentialId: number): Promise<User> => {
    const user : User = await UserModel.findOneBy({Credential:{id:credentialId}});
    return user;
};