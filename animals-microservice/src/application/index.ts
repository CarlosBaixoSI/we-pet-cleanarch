import { Resolver, asFunction } from "awilix";
import { makeAnimals } from "./animals"


export type Dependencies = {
    animals: ReturnType<typeof makeAnimals>;
}

export function makeApplication(): {[dependency in keyof Dependencies] : Resolver<Dependencies[dependency]>} {
    return {
        animals: asFunction(makeAnimals).singleton()
    }
}