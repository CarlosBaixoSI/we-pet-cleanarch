import { Role } from "@prisma/client";
import { Role as RoleEntity } from "@domain/entities";
export class UserInfo{
    public id?: number;
    public email: string;
    public username: string;
    public password: string;
    public updatedAt: Date;
    public createdAt: Date;
    public resetPasswordToken?: string;
    public resetPasswordExpires?: Date;
    public roles?: RoleEntity[];
/**
 *
 */
constructor(userInfo: {id?: number, email: string, username: string, password: string, updatedAt: Date, createdAt: Date, resetPasswordToken?: string, resetPasswordExpires?: Date, roles?: RoleEntity[]}) {
    this.id = userInfo.id;
    this.email = userInfo.email;
    this.username = userInfo.username;
    this.password = userInfo.password;
    this.updatedAt = userInfo.updatedAt;
    this.createdAt = userInfo.createdAt;
    this.resetPasswordToken = userInfo.resetPasswordToken;
    this.resetPasswordExpires = userInfo.resetPasswordExpires;
    this.roles = userInfo.roles;
}   
}
