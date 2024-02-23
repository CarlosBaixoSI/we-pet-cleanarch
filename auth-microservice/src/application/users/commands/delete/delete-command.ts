import { NotFoundException } from "@application/common/exceptions";
import { Dependencies } from "@infrastructure/di";

export type DeleteCommand = Readonly<{
    idUserToDelete: number;
  }>;

export function makeDeleteCommand(dependencies: Pick<Dependencies, 'usersInfoRepository'>){
    return async function deleteCommand(command : DeleteCommand){
        var user = await dependencies.usersInfoRepository.getById({id: command.idUserToDelete});

        if(!user)
            throw new NotFoundException('User not found');

       return await dependencies.usersInfoRepository.delete({id: command.idUserToDelete});
    };
}