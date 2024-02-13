import { NotFoundException, ValidationException } from "@application/common/exceptions";
import { Dependencies } from "@infrastructure/di";
import bcrypt from 'bcrypt';
import { validate } from "./sign-in-command-validator";

export type SignInCommand = Readonly<{
    email: string;
    password: string;
  }>;

export function makeSignInCommand(dependencies: Pick<Dependencies, 'usersInfoRepository'>){
    return async function signInCommand(command : SignInCommand){

        await validate(command);
        const {email, password} = command;
        const user = await dependencies.usersInfoRepository.getByEmail({email});
        
        if(!user)
            throw new ValidationException(`It was impossible to sign in with the provided credentials. Verify if the username and password are correct.`);
  
        //Check if password matches
        const doesPasswordMatch = await bcrypt.compare(password, user.password);
        //If it does not match, throw an exception
        if(!doesPasswordMatch)
            throw new ValidationException(`It was impossible to sign in with the provided credentials. Verify if the username and password are correct.`);

        //If it matches, get user role
        //todo implement userRoles repository
        //const roles = dependencies.usersRolesRepository.getRolesByUserId({user.id});

        //Generate token
        //todo implement token service
        //const token = dependencies.tokenService.generateToken({userId: user.id, roles});

        //Return user info and token

        return 'token';
    }
}