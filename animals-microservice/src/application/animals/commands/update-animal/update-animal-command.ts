import { NotFoundException } from "@application/common/exceptions";
import { Dependencies} from "@infrastructure/di";
import { validate } from "./update-animal-command-validator";
import { GenderEnum } from "@domain/entities";

export interface UpdateAnimalCommand {
    id: number
    name: string
    birthDate: Date
    description: string
    gender: GenderEnum
    userId: string
    shelterId: string
    size: string
    animalType: string
    breed: string
}

export function makeUpdateAnimalCommand({ animalsRepository }: Pick<Dependencies, 'animalsRepository'>)  {
    return async function UpdateAnimalCommand(command: UpdateAnimalCommand) {
        await validate(command);
        const {id, name, birthDate, description, gender, userId, shelterId, size, animalType, breed} = command;

        const animal = await animalsRepository.getById({id: command.id});

        if(!animal)
            throw new NotFoundException(`Animal ${command.id} does not exist`);

        if(name) animal.name = name;
        if(birthDate) animal.birthDate = birthDate;
        if(description) animal.description = description;
        if(gender) animal.gender = gender;
        if(userId) animal.userId = userId;
        if(shelterId) animal.shelterId = shelterId;
        if(size) animal.size = size;
        if(animalType) animal.animalType = animalType;
        if(breed) animal.breed = breed;

        return await animalsRepository.update({animal: animal});
    }
}