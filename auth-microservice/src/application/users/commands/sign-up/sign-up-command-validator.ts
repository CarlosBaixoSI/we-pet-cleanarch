
import * as Yup from 'yup'; // Schema validator library
import { ValidationException } from "@application/common/exceptions";
import { SignUpCommand } from './sign-up-command';

export async function validate(command: SignUpCommand) {
    try {
        const schema: Yup.ObjectSchema<SignUpCommand> = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        });
        
        await schema.validate(command, { abortEarly: false, strict: false });
    } catch (error) {   
        throw new ValidationException(error as Yup.ValidationError);
    }
}