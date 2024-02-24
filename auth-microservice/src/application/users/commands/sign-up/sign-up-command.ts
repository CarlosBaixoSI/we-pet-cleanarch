import { Dependencies } from "@infrastructure/di";
import { validate } from "./sign-up-command-validator";
import { UserInfo } from "@domain/entities/userInfo";
import { Role } from "@domain/entities";
import * as bcrypt from 'bcrypt';
import { Dependencies as ApplicationDependencies} from '@application/di';

export type SignUpCommand = Readonly<{
    email: string;
    password: string;
}>;
export function makeSignUpCommand(dependencies: Pick<Dependencies, 'usersInfoRepository' | 'rolesRepository' | 'passwordHasher'>) {
    return async function signUpCommand(command: SignUpCommand) {
        await validate(command);
        
        //todo hash password 
        const hashedPassword = await dependencies.passwordHasher.hashPassword(command.password);

        const roles = await dependencies.rolesRepository.getAll();

        const newUserInfo = new UserInfo({
            email: command.email,
            username: command.email,
            password: hashedPassword,
            updatedAt: new Date(),
            createdAt: new Date(),
            roles: []
        });

        newUserInfo.roles?.push(roles.find(role => role.name === 'user') as Role);

        const {id} = await dependencies.usersInfoRepository.create({userInfo : newUserInfo});
        return id;
    };
}