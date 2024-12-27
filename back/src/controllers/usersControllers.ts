import { Request, Response } from "express";
import UserDto from "../dto/UserDto";
import User from "../entities/user";
import Credential from "../entities/credential";
import { createUserService, getAllUsersService } from "../services/usersService";
import { getUserByIdService } from "../services/usersService";
import { validateCredential } from "../services/credentialsService";
import { findUser } from "../services/usersService"

export const getAllUsers = async(req: Request, res: Response) => {
    try {
        const users: User[] = await getAllUsersService();
        res.status(200).json(users);
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
};

export const getUserById = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user: User = await getUserByIdService(Number(id));
        res.status(200).json(user);
    } catch (error: any){
        res.status(400).json({error: error.message})
    }
};

export const register = async(req: Request, res: Response) => {
    try {
        const {name, email, username, password, birthdate, nDni} = req.body;
        const newUser: User = await createUserService({
            name, email, username, password, birthdate, nDni
        })
        res.status(200).json(newUser);    
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const credential: Credential= await validateCredential({ username, password });
        const user = await findUser(credential.id);
        res.status(200).json({
            user,
            login: true
        })
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
};