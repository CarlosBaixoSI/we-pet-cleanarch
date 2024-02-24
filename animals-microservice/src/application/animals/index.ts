import { Dependencies } from "@infrastructure/di";
import { makeCreateAnimalCommand } from "./commands/create-animal/create-animal-command";
import { makeDeleteAnimalCommand } from "./commands/delete-animal/delete-animal-command";
import { makeUpdateAnimalCommand } from "./commands/update-animal/update-animal-command";
import { makeGetAnimalsQuery } from "./queries/get-animals/get-animals-query";
import { makeGetAnimalQuery } from "./queries/get-animal/get-animal-query";

export function makeAnimals(dependencies: Dependencies){
    return {
        commands:{
            createAnimal: makeCreateAnimalCommand(dependencies),
            deleteAnimal: makeDeleteAnimalCommand(dependencies),
            updateAnimal: makeUpdateAnimalCommand(dependencies)
        },
        queries:{
            getAnimals: makeGetAnimalsQuery(dependencies),
            getAnimal: makeGetAnimalQuery(dependencies)
        }
    };
}
