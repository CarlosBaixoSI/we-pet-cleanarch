import { Dependencies } from "@infrastructure/di";
import { makeCreateUserCommand } from "./commands/create-user/create-user-command";
import { makeGetUsersQuery } from "./queries/get-users/get-users-query";
import { makeGetUserQuery } from "./queries/get-user/get-user-query";
import { makeDeleteUserCommand } from "./commands/delete-user";
import { makeUpdateUserCommand } from "./commands/update-user/";


export function makeUsers(dependencies: Dependencies) {
    return {
      commands: {
        createUser: makeCreateUserCommand(dependencies),
        deleteUser: makeDeleteUserCommand(dependencies),
        updateUser: makeUpdateUserCommand(dependencies),
      },
      queries: {
        getUsers: makeGetUsersQuery(dependencies),
        getUser: makeGetUserQuery(dependencies),
      },
    };
  }