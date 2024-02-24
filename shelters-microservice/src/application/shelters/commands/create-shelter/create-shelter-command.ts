import { Shelter } from "@domain/entities";
import { Dependencies } from "@infrastructure/di";
import { validate } from  './create-shelter-command-validator';

export interface CreateShelterCommand{
    name: string;
    description: string;
    address: string;
    phoneNumber: string;
    email: string;
    isVerified: boolean;
    createAt: Date;
    userId: number;
}

export function makeCreateShelterCommand({ sheltersRepository }: Pick<Dependencies, 'sheltersRepository'>){
    return async function createShelter(command: CreateShelterCommand){
        await validate(command);
        const shelter: Shelter = new Shelter({
            name: command.name,
            description: command.description,
            address: command.address,
            phoneNumber: command.phoneNumber,
            email: command.email,
            isVerified: command.isVerified,
            createAt: command.createAt,
            userId: command.userId
        });

        const {id} = await sheltersRepository.create({ shelter });

        return id;
    }
}