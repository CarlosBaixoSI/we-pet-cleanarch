import { Dependencies } from "@infrastructure/di";
import { validate } from "./sign-up-command-validator";
import { UserInfo } from "@domain/entities";

export type SignUpCommand = Readonly<{
    email: string;
    password: string;
}>;
export function makeSignUpCommand(dependencies: Pick<Dependencies, 'usersInfoRepository'>) {
    return async function signUpCommand(command: SignUpCommand) {
        await validate(command);
        
        //todo hash password 
        //const hashedPassword = await 

        const newUserInfo = new UserInfo({
            email: command.email,
            username: command.email,
            password: command.password,
            updatedAt: new Date(),
            createdAt: new Date(),
        });

        const {id} = await dependencies.usersInfoRepository.create({userInfo : newUserInfo});
        return id;
    };
}