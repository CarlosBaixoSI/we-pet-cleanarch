import { Dependencies } from "@infrastructure/di";
import { toDto } from "./get-animals-query-mapper";

export function makeGetAnimalsQuery({ animalsRepository }: Pick<Dependencies, 'animalsRepository'>){
    return async function getAnimalsQuery(){
        const animals = await animalsRepository.getAll();
        return toDto(animals);
    }
}
