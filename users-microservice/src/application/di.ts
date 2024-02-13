import { Resolver, asFunction } from "awilix";
import { makeUsers } from "./users"

export type Dependencies = {
    users: ReturnType<typeof makeUsers>;
}

export function makeApplication(): {[dependency in keyof Dependencies] : Resolver<Dependencies[dependency]>} {
    return {
        users: asFunction(makeUsers).singleton()
    }
}