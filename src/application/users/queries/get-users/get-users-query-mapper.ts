import { User } from "@domain/entities";

export function toDto(users: User[]){
    return users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        birthDate: user.birthDate,
        phoneNumber: user.phoneNumber
    }));
}