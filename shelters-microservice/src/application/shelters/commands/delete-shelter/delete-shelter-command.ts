import { Dependencies } from "@infrastructure/di";
import { validate } from './delete-shelter-command-validator';
import { NotFoundException } from "@application/common/exceptions";

export interface DeleteShelterCommand {
    id: number
}

export function makeDeleteShelterCommand({sheltersRepository}: Pick<Dependencies, 'sheltersRepository'>){
    return async function deleteShelter(command: DeleteShelterCommand){
        await validate(command);
        const shelter = await sheltersRepository.delete({id: command.id});
        if(!shelter){
            throw new NotFoundException('Shelter not found');
        }
        return await sheltersRepository.delete({id: command.id});
    }
}
