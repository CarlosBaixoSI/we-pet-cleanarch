export class Shelter{
    public id?: number;
    public name: string;
    public description: string;
    public address: string;
    public phoneNumber: string;
    public email: string;
    public isVerified: boolean;
    public createAt: Date;
    public userId: number;

    constructor({id, name, description, address, phoneNumber, email, isVerified, createAt, userId}: Shelter){
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.isVerified = isVerified;
        this.createAt = createAt ?? new Date();
        this.userId = userId;
    }
}
