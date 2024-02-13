import { Dependencies } from "@infrastructure/di";
import { makeSignInCommand } from "./commands/sign-in/sign-in-command";
import { makeSignUpCommand } from "./commands/sign-up/sign-up-command";

export function makeUsers(dependencies: Dependencies) {
    return {
      commands: {
        signIn: makeSignInCommand(dependencies),
        signUp: makeSignUpCommand(dependencies),
        // deleteUser: makeDeleteUserCommand(dependencies),
        // updateUser: makeUpdateUserCommand(dependencies),
      },
      queries: {
        // signIn: makeSignInQuery(dependencies),
        // getUser: makeGetUserQuery(dependencies),
      },
    };
  }