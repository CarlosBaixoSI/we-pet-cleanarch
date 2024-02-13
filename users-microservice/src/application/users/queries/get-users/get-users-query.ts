import { Dependencies } from "@infrastructure/di";
import { toDto } from "./get-users-query-mapper";

export function makeGetUsersQuery({usersRepository}: Pick<Dependencies, 'usersRepository'>) {
    return async function getUsersQuery(){
        const users = await usersRepository.getAll();
        return toDto(users);
    }
}   