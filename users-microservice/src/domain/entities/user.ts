export class User{
    public id?: number;
    public name: string;
    public email: string;
    public birthDate: Date;
    public phoneNumber: string;
    public updatedAt: Date;
    public createdAt: Date;
    public city: string;
    
    /**
     *
     */
    constructor(user : {id?: number, name: string, email: string, birthDate: Date, phoneNumber: string, updatedAt: Date, createdAt: Date, city: string}) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.birthDate = user.birthDate ?? new Date();
        this.phoneNumber = user.phoneNumber ?? '';
        this.updatedAt = user.updatedAt ?? new Date();
        this.createdAt = user.createdAt ?? new Date();
        this.city = user.city ?? '';
    }

}