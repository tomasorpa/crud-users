import { User } from "../models/user"

export const userModelToLocalhost = (userModel) => {
    const {
        id,
        isActive,
        balance,
        avatar,
        firstName,
        lastName,
        gender
    } = userModel
    
    
    return ({
        id,
        isActive,
        balance,
        avatar,
        first_name: firstName,
        last_name: lastName,
        gender,
    })
}