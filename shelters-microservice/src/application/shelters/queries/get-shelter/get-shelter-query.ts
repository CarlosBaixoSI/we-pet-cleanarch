import { NotFoundException } from "@application/common/exceptions";
import { Dependencies } from "@infrastructure/di";
import { toDto } from "./get-shelter-query-mapper";

export type GetShelterQuery = Readonly<{
    id: number
}>;

export function makeGetShelterQuery(dependencies: Pick<Dependencies, 'sheltersRepository'>){
    return async function getShelter({id}: GetShelterQuery){
        const shelter = await dependencies.sheltersRepository.getById({id});
        if(!shelter){
            throw new NotFoundException('Shelter not found');
        }
        return toDto(shelter);
    }
}
