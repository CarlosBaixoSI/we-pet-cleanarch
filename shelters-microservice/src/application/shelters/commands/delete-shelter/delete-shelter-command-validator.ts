import { ValidationException } from "@application/common/exceptions";
import { DeleteShelterCommand } from "./delete-shelter-command";
import * as Yup from 'yup';

export async function validate(command: DeleteShelterCommand){
    try{
        const schema: Yup.ObjectSchema<DeleteShelterCommand> = Yup.object().shape({
            id: Yup.number().required().min(1)
        });

        await schema.validate(command, { abortEarly: false, strict: false });
    } catch (error){
        throw new ValidationException(error as Yup.ValidationError);
    }
}
