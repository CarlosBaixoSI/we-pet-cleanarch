import { ValidationException } from "@application/common/exceptions";
import { UpdateUserCommand } from "./update-user-command";
import * as Yup from 'yup'; // Schema validator library
export async function validate(command: UpdateUserCommand){
    try {
       const schema: Yup.ObjectSchema<UpdateUserCommand> = Yup.object().shape({ 
              id: Yup.number().required().min(1),
              email: Yup.string().email().optional(),
              name: Yup.string().optional(),
              birthDate: Yup.date().optional(),
              phoneNumber: Yup.string().optional().length(9),
              city: Yup.string().optional()
       });

        await schema.validate(command, { abortEarly: false, strict: false });
    } catch (error) {
        return new ValidationException(error as Yup.ValidationError);
    }
}