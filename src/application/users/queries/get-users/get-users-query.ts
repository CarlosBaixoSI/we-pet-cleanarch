import { Dependencies } from "@infrastructure/di";

export function makeGetUsersQuery({usersRepository}: Pick<Dependencies, 'usersRepository'>) {
    return async function getUsersQuery(){
        const users = usersRepository.getAll();

        return users;
    }
}   