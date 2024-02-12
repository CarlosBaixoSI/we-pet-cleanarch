import { NotFoundException } from "@application/common/exceptions";
import { Dependencies } from "@infrastructure/di";
import { toDto } from "./get-user-query-mapper";

export type GetUserQuery = Readonly<{
    id: number;
  }>;

export function makeGetUserQuery(dependencies: Pick<Dependencies, 'usersRepository'>){
    return async function getUserQuery({id} : GetUserQuery){
        const user = await dependencies.usersRepository.getById({id});

        if(!user)
            throw new NotFoundException(`User ${id} does not exist`);

        return toDto(user);
    }
}