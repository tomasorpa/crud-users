// TODO: FUNCION SAVE USERS COMO ADD, POSTEAR LA PETICION AL BACKEND Y HACER EL MAPPER

import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper"
import { User } from "../models/user"

/**
 * 
 * @param {like<User>} user     
 */
export const saveUser =async (user) => {
    const newUser = new User(user)//PORQUE NO SE MANDA CON LLAVES{}??
    if ( user.id ) {
            userUpdated = await updateUser(userToSave);
        } 
    
    const userToPost =userModelToLocalhost(newUser)
    const userCreated = await createUser(userToPost)
    console.warn({ userCreated })
    console.log(userCreated.first_name)
    return userCreated ;
}


const createUser =async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),//JSONEA EL DATO QUE QUEREMOS MANDAR POR QUE PARA ESO ES EL BODY, ES EL DATO QUE QUEREMOS ENVIAR Y LOS DATOS DEBEN ESTAR EN JSON.
        headers: {
            "Content-Type": "application/json",//DICE EL TTIPO DE DATO QUE ENVIAREMOS 
        }
    });
    const data = await res.json();
    
    return data
}
