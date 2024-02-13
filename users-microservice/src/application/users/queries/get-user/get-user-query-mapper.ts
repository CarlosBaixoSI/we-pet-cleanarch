import { User } from "@domain/entities";

export function toDto(user: User){
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        birthDate: user.birthDate,
        phoneNumber: user.phoneNumber
    }
}