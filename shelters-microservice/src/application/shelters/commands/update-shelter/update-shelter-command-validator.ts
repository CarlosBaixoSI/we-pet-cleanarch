import { ValidationException } from "@application/common/exceptions";
import { UpdateShelterCommand } from "./update-shelter-command";
import * as Yup from 'yup';
export async function validate(command: UpdateShelterCommand){
    try{
        const schema: Yup.ObjectSchema<UpdateShelterCommand> = Yup.object().shape({
            id: Yup.number().required().min(1),
            name: Yup.string().required(),
            description: Yup.string().required(),
            address: Yup.string().required(),
            phoneNumber: Yup.string().required(),
            email: Yup.string().required(),
            isVerified: Yup.boolean().required(),
            createAt: Yup.date().required(),
            userId: Yup.number().required()
        });

        await schema.validate(command, { abortEarly: false, strict: false });
    } catch (error){
        throw new ValidationException(error as Yup.ValidationError);
    }
}
