import { Dependencies } from "@infrastructure/di";
import { makeSignInCommand } from "./commands/sign-in/sign-in-command";
import { makeSignUpCommand } from "./commands/sign-up/sign-up-command";
import { Dependencies as ApplicationDependencies} from "@application/di";
import { makeDeleteCommand } from "./commands/delete/delete-command";
export function makeUsers(dependencies: Dependencies, applicationDependencies: ApplicationDependencies) {
  return {
      commands: {
        signIn: makeSignInCommand(dependencies),
        signUp: makeSignUpCommand(dependencies, applicationDependencies),
        deleteUserInfo: makeDeleteCommand(dependencies),
        // updateUser: makeUpdateUserCommand(dependencies),
      },
      queries: {
        // signIn: makeSignInQuery(dependencies),
        // getUser: makeGetUserQuery(dependencies),
      },
    };
  }