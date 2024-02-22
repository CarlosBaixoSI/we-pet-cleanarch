import {Role} from '@domain/entities'

export interface IRolesRepository{
    getAll: () => Promise<Role[]>;
}