import { ValidationException } from "@application/common/exceptions";
import { UpdateAnimalCommand } from "./update-animal-command";
import * as Yup from "yup";
import { GenderEnum } from "@domain/entities";

export async function validate(command: UpdateAnimalCommand) {
    try{
        const schema: Yup.ObjectSchema<UpdateAnimalCommand> = Yup.object().shape({
            id: Yup.number().required().min(1),
            name: Yup.string().required(),
            birthDate: Yup.date().required(),
            description: Yup.string().required(),
            gender: Yup.mixed<GenderEnum>().oneOf(Object.values(GenderEnum)).required(),
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