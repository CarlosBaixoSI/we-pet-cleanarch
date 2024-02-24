import { NotFoundException } from "@application/common/exceptions";
import { Dependencies } from "@infrastructure/di";
import { validate } from './update-shelter-command-validator';

export interface UpdateShelterCommand {
    id: number
    name: string
    description: string
    address: string
    phoneNumber: string
    email: string
    isVerified: boolean
    createAt: Date
    userId: number
}

export function makeUpdateShelterCommand({sheltersRepository}: Pick<Dependencies, 'sheltersRepository'>){
    return async function updateShelter(command: UpdateShelterCommand){
        await validate(command);

        const {id, name, description, address, phoneNumber, email, isVerified, createAt, userId} = command;

        const shelter = await sheltersRepository.getById({id: command.id});

        if(!shelter){
            throw new NotFoundException('Shelter not found');
        }

        if(name)
            shelter.name = name;
        if(description)
            shelter.description = description;
        if(address)
            shelter.address = address;
        if(phoneNumber)
            shelter.phoneNumber = phoneNumber;
        if(email)
            shelter.email = email;
        if(isVerified)
            shelter.isVerified = isVerified;
        if(createAt)
            shelter.createAt = createAt;
        if(userId)
            shelter.userId = userId;

        return await sheltersRepository.update({shelter: shelter});
    }
}
