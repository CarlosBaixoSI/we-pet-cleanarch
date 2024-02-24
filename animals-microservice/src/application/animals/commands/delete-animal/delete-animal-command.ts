import { Dependencies } from "@infrastructure/di";
import { validate } from "./delete-animal-command-validator";
import { NotFoundException } from "@application/common/exceptions";

export interface DeleteAnimalCommand {
    id: number;
}

export function makeDeleteAnimalCommand({ animalsRepository }: Pick<Dependencies, 'animalsRepository'>) {
    return async function DeleteAnimalCommand(command: DeleteAnimalCommand) {
        await validate(command);

        const animal = await animalsRepository.getById({id: command.id});

        if(!animal)
            throw new NotFoundException(`Animal ${command.id} does not exist`);

            return await animalsRepository.delete({id: command.id});
        }
    }