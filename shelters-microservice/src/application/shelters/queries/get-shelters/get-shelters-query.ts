import { Dependencies } from "@infrastructure/di";
import { toDto } from "./get-shelters-query-mapper";

export function makeGetSheltersQuery({sheltersRepository}: Pick<Dependencies, 'sheltersRepository'>){
    return async function getShelters(){
        const shelters = await sheltersRepository.getAll();
        return toDto(shelters);
    }
}