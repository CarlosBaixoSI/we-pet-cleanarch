import { NotFoundException, ValidationException } from "@application/common/exceptions";
import { Dependencies } from "@infrastructure/di";
import bcrypt from 'bcrypt';
import { validate } from "./sign-in-command-validator";
import jwt from 'jsonwebtoken';


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
        if(!user.roles || user.roles.length === 0)
            throw new NotFoundException(`User does not have any role assigned. Please contact the system administrator.`);

        const token = jwt.sign({userId: user.id, roles: user.roles}, process.env.JWT_SECRET!, {expiresIn: '1h'});
        //Return user info and token

        return {token: token};
    }
}