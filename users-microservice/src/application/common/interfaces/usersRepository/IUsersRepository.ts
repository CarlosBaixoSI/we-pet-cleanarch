import {User} from '@domain/entities'

export interface IUsersRepository{
    create: (parameters : {user: User}) => Promise<{id: number}>;
    getById: (parameters: {id: number}) => Promise<User | null>;
    getByEmail: (parameters: {email: string}) => Promise<User | null>;
    delete: (parameters: {id: number}) => Promise<void>;
    update: (parameters: {user: User}) => Promise<void>;
    getAll: () => Promise<User[]>;
    //getUserIdByEmail: (parameters: {email: string}) => Promise<number | null>;
}