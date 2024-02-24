import { Animal } from "@domain/entities";
import { Dependencies } from "@infrastructure/di";
import { validate } from "./create-animal-command-validator";
import { GenderEnum } from "@domain/entities/animal";

export interface CreateAnimalCommand {
    name: string;
    birthDate: Date;
    description: string;
    gender: GenderEnum;
    userId: string;
    shelterId: string;
    size: string;
    animalType: string;
    breed: string;
}

export function makeCreateAnimalCommand({ animalsRepository }: Pick<Dependencies, 'animalsRepository'>) {
   return async function CreateAnimalCommand(command: CreateAnimalCommand) {
       command.birthDate = new Date(command.birthDate);

       await validate(command);

       const animal = new Animal({
           name: command.name,
           birthDate: command.birthDate,
           description: command.description,
           gender: command.gender,
           userId: command.userId,
           shelterId: command.shelterId,
           size: command.size,
           animalType: command.animalType,
           breed: command.breed,
           createdAt: new Date(),
       });

       const {id} = await animalsRepository.create({ animal });

       return id;
   };
}
