import { Dependencies } from "@infrastructure/di";
import { makeSignInCommand } from "./commands/sign-in/sign-in-command";
import { makeSignUpCommand } from "./commands/sign-up/sign-up-command";
import { Dependencies as ApplicationDependencies} from "@application/di";
export function makeUsers(dependencies: Dependencies, applicationDependencies: ApplicationDependencies) {
  return {
      commands: {
        signIn: makeSignInCommand(dependencies),
        signUp: makeSignUpCommand(dependencies, applicationDependencies),
        // deleteUser: makeDeleteUserCommand(dependencies),
        // updateUser: makeUpdateUserCommand(dependencies),
      },
      queries: {
        // signIn: makeSignInQuery(dependencies),
        // getUser: makeGetUserQuery(dependencies),
      },
    };
  }