import { NotFoundException } from "@application/common/exceptions";
import { Dependencies } from "@infrastructure/di";
import { validate } from "./update-user-command-validator";

export interface UpdateUserCommand {
    id: number;
    email?: string;
    name?: string;
    birthDate?: Date;
    phoneNumber?: string;
    city?: string;
}


export function makeUpdateUserCommand({usersRepository} : Pick<Dependencies, 'usersRepository'>){
    return async function updateUserCommand(command: UpdateUserCommand){
        await validate(command);
        const {id, email, name, birthDate, phoneNumber, city} = command;

        const user = await usersRepository.getById({id: command.id});

        if(!user)
            throw new NotFoundException(`User ${id} does not exist.`)

        if(email)
            user.email = email;
        if(name)
            user.name = name;
        if(birthDate instanceof Date)
            user.birthDate = new Date(birthDate);
        if(phoneNumber)
            user.phoneNumber = phoneNumber;
        if(city)
            user.city = city;
        
        return await usersRepository.update({user: user});
    }
}