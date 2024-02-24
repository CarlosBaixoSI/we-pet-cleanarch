import { CreateAnimalCommand } from "./create-animal-command";
import * as Yup from "yup";
import { ValidationException } from "@application/common/exceptions";
export async function validate(command: CreateAnimalCommand) {
    try{
        const schema: Yup.ObjectSchema<CreateAnimalCommand> = Yup.object().shape({
            name: Yup.string().required(),
            birthDate: Yup.date().required(),
            description: Yup.string().required(),
            gender: Yup.string().required(),
            userId: Yup.string().required(),
            shelterId: Yup.string().required(),
            size: Yup.string().required(),
            animalType: Yup.string().required(),
            breed: Yup.string().required()
        });
        await schema.validate(command, {abortEarly: false, strict: false});
        } catch (error) {
            throw new ValidationException(error as Yup.ValidationError);
    }
}
