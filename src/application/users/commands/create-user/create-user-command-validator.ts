import { CreateUserCommand } from "./create-user-command";
import * as Yup from 'yup'; // Schema validator library
import { ValidationException } from "@application/common/exceptions";
export async function validate(command: CreateUserCommand) {
    try {
        const schema: Yup.ObjectSchema<CreateUserCommand> = Yup.object().shape({
            email: Yup.string().email().required(),
            name: Yup.string().required(),
            birthDate: Yup.date().required(),
            phoneNumber: Yup.string().required().length(9),
            city: Yup.string().required()
        });

        await schema.validate(command, { abortEarly: false, strict: true });
    } catch (error) {   
        throw new ValidationException(error as Yup.ValidationError);
    }
}