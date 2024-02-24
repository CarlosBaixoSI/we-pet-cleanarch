import { Animal } from '@domain/entities'

export interface IAnimalsRepository {
    create: (parameters : { animal: Animal}) => Promise<{id:number}>;
    getAll: () => Promise<Animal[]>;
    getById: (parameters: {id: number}) => Promise<Animal | null>;
    delete: (parameters: {id: number}) => Promise<void>;
    update: (parameters: {animal: Animal}) => Promise<void>;
}
