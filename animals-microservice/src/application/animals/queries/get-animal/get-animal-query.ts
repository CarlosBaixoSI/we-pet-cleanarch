import { NotFoundException } from "@application/common/exceptions";
import { Dependencies } from "@infrastructure/di";
import { toDto } from "./get-animal-query-mapper";

export type GetAnimalQuery = Readonly<{
    id: number
}>;

export function makeGetAnimalQuery(dependencies: Pick<Dependencies, 'animalsRepository'>){
    return async function getAnimalQuery({id}: GetAnimalQuery){
        const animal = await dependencies.animalsRepository.getById({id});
        if(!animal)
            throw new NotFoundException(`Animal ${id} does not exist`);
        return toDto(animal);
    }
}
