import { Dependencies } from "@infrastructure/di";
import { makeCreateUserCommand } from "./commands/create-user/create-user-command";
import { makeGetUsersQuery } from "./queries/get-users/get-users-query";
import { makeGetUserQuery } from "./queries/get-user/get-user-query";


export function makeUsers(dependencies: Dependencies) {
    return {
      commands: {
        createPost: makeCreateUserCommand(dependencies),
        // deletePost: makeDeletePostCommand(dependencies),
        // updatePost: makeUpdatePostCommand(dependencies),
      },
      queries: {
        getUsers: makeGetUsersQuery(dependencies),
        getUser: makeGetUserQuery(dependencies),
      },
    };
  }