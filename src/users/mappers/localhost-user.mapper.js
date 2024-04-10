import { User } from "../models/user"
/**
 * 
 * @param Similar to User localhostUser 
 * @returns new User
 */
export const localhostUserToModel=(localhostUser)=> {
    const {
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender
    }=localhostUser
    return new User({
        id,
        isActive,
        balance,
        avatar,
        firstName: first_name,
        lastName: last_name,
        gender,
   
    })
}