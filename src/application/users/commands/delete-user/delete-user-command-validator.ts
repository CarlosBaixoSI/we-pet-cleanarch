import { ValidationException } from "@application/common/exceptions";
import { DeleteUserCommand } from "./delete-user-command";
import * as Yup from 'yup'; // Schema validator library

export async function validate(command: DeleteUserCommand){
    try {
        const schema: Yup.ObjectSchema<DeleteUserCommand> = Yup.object().shape({
            id: Yup.number().required().min(1)
        });

        await schema.validate(command, { abortEarly: false, strict: false });
    } catch (error) {
        throw new ValidationException(error as Yup.ValidationError);
    }
}