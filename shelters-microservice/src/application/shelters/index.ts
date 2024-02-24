import { Dependencies } from "@infrastructure/di";
import { makeCreateShelterCommand } from "./commands/create-shelter";
import { makeDeleteShelterCommand } from "./commands/delete-shelter";
import { makeUpdateShelterCommand } from "./commands/update-shelter";
import { makeGetShelterQuery } from "./queries/get-shelter";
import { makeGetSheltersQuery } from "./queries/get-shelters";

export function makeShelters(dependencies: Dependencies){
    return {
        commands: {
            createShelter: makeCreateShelterCommand(dependencies),
            deleteShelter: makeDeleteShelterCommand(dependencies),
            updateShelter: makeUpdateShelterCommand(dependencies)
        },
        queries: {
            getShelter: makeGetShelterQuery(dependencies),
            getShelters: makeGetSheltersQuery(dependencies)
        },
    };
}
