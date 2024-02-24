import { ValidationException } from "@application/common/exceptions";
import { DeleteAnimalCommand } from "./delete-animal-command";
import * as Yup from "yup";

export async function validate(command: DeleteAnimalCommand){
    try {
        const schema: Yup.ObjectSchema<DeleteAnimalCommand> = Yup.object().shape({
            id: Yup.number().required().min(1)
        });
        await schema.validate(command, {abortEarly: false, strict: false});
    } catch (error) {
        throw new ValidationException(error as Yup.ValidationError);
    }
}
