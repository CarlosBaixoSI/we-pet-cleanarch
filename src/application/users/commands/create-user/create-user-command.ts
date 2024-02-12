import { User } from '@domain/entities';
import { Dependencies } from '@infrastructure/di';
import { validate } from './create-user-command-validator';

export interface CreateUserCommand {
  email: string;
  name: string;
  birthDate: Date;
  phoneNumber: string;
  city: string;
}

export function makeCreateUserCommand({ usersRepository }: Pick<Dependencies, 'usersRepository'>) {
  return async function CreateUserCommand(command: CreateUserCommand) {
    await validate(command);

    const user = new User({
      name: command.name,
      email: command.email,
      birthDate: command.birthDate,
      phoneNumber: command.phoneNumber,
      updatedAt: new Date(),
      createdAt: new Date(),
      city: command.city,
    });
    
    const {id} = await usersRepository.create({ user });

    return id;
  };
}
