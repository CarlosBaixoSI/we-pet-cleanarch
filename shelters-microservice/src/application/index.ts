import { Resolver, asFunction } from "awilix";
import { makeShelters } from "./shelters";

export type Dependencies = {
    shelters: ReturnType<typeof makeShelters>;
};

export function makeApplication(): {[dependency in keyof Dependencies] : Resolver<Dependencies[dependency]>} {
    return {
        shelters: asFunction(makeShelters).singleton()
    };
}
