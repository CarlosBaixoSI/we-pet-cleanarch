export enum GenderEnum {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other'
}
export class Animal {
    public id?: number;
    public name: string;
    public birthDate: Date;
    public description: string;
    public gender: GenderEnum;
    public userId: string;
    public shelterId: string;
    public size: string;
    public animalType: string;
    public breed: string;
    public createdAt: Date;

    constructor(animal: {id?: number, name: string, birthDate: Date, description: string, gender: GenderEnum, userId: string, shelterId: string, size: string, animalType: string, breed: string, createdAt: Date}) {
        this.id = animal.id;
        this.name = animal.name;
        this.birthDate = animal.birthDate || new Date();
        this.description = animal.description;
        this.gender = animal.gender;
        this.userId = animal.userId;
        this.shelterId = animal.shelterId;
        this.size = animal.size;
        this.animalType = animal.animalType;
        this.breed = animal.breed;
        this.createdAt = animal.createdAt || new Date();
    }
}
