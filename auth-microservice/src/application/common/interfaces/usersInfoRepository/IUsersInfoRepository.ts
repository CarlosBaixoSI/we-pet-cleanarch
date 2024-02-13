import {UserInfo} from '@domain/entities'

export interface IUsersInfoRepository{
    create: (parameters : {userInfo: UserInfo}) => Promise<{id: number}>; //create user info
    getById: (parameters: {id: number}) => Promise<UserInfo | null>;
    delete: (parameters: {id: number}) => Promise<void>;
    update: (parameters: {userInfo: UserInfo}) => Promise<void>;
    getByEmail: (parameters: {email: string}) => Promise<UserInfo | null>;
}