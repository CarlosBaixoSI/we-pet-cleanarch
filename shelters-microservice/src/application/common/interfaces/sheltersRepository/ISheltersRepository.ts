import { Shelter } from "@domain/entities";

export interface ISheltersRepository {
    create: (parameter: {shelter: Shelter}) => Promise<{id: number}>;
    getById: (parameter: {id: number}) => Promise<Shelter | null>;
    getAll: () => Promise<Shelter[]>;
    update: (parameter: {shelter: Shelter}) => Promise<void>;
    delete: (parameter: {id: number}) => Promise<void>;
}
