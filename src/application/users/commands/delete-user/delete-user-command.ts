import { Dependencies } from "@infrastructure/di";
import { validate } from "./delete-user-command-validator";
import { NotFoundException } from "@application/common/exceptions";

export interface DeleteUserCommand {
    id: number;
}

export function makeDeleteUserCommand({usersRepository}: Pick<Dependencies, 'usersRepository'>) {
    return async function deleteUserCommand(command: DeleteUserCommand){
        await validate(command);

        const user = await usersRepository.getById({id: command.id});

        if(!user)
            throw new NotFoundException(`User ${command.id} does not exist.`)

        return await usersRepository.delete({id: command.id});
    }
}