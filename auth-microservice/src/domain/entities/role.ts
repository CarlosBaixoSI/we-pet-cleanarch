export class Role{
    public id?: number;
    public name: string;
    public description: string;
    public updatedAt: Date;
    public createdAt: Date;

    constructor(role: {id?: number, name: string, description: string, updatedAt: Date, createdAt: Date}) {
        this.id = role.id;
        this.name = role.name;
        this.description = role.description;
        this.updatedAt = role.updatedAt;
        this.createdAt = role.createdAt;
    }
}