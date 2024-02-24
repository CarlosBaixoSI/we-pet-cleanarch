import { CreateShelterCommand } from './create-shelter-command';
import * as Yup from 'yup';
import { ValidationException } from "@application/common/exceptions;
export async function validate(command: CreateShelterCommand){
    try{
        const schema: Yup.ObjectSchema<CreateShelterCommand> = Yup.object().shape({
            name: Yup.string().required(),
            description: Yup.string().required(),
            address: Yup.string().required(),
            phoneNumber: Yup.string().required(),
            email: Yup.string().required(),
            isVerified: Yup.boolean().required(),
            createAt: Yup.date().required(),
            userId: Yup.number().required()
        });

        await schema.validate(command, { abortEarly: false });
    }catch(error){
        throw new ValidationException(error as Yup.ValidationError);
    }
}
