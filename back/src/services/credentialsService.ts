import { CredentialModel } from "../config/data-source";
import ICredentialDto from "../dto/ICredentialDto";
import Credential from "../entities/credential";

export const createCredential = async (credentialDto: ICredentialDto): Promise<Credential> => {
    const newCredential: Credential = await CredentialModel.create(credentialDto);
    await CredentialModel.save(newCredential);
    return newCredential;
};

export const validateCredential = async (credentialDto: ICredentialDto): Promise<Credential> => {
    const {username, password} = credentialDto;
    const foundCredential: Credential | null = await CredentialModel.findOneBy({username})
    if(!foundCredential){
        throw Error("Usuario inexistente")
    }
    if(foundCredential.password !== password){
        throw Error("El usuario o la contraseña son incorrectos")
    }
    
    return foundCredential
};