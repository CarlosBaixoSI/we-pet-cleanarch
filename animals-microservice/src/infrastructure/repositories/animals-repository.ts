import { IAnimalsRepository } from "@application/common/interfaces";
import { Animal } from "@domain/entities";
import { Dependencies } from "@infrastructure/di";
import { Animal as AnimalModel } from "@prisma/client";

function toEntity(animal: AnimalModel){
    return new Animal({
        id: animal.id,
        name: animal.name,
        breed: animal.breed,
        description: animal.description,
        birthDate: animal.birthDate,
        gender: animal.gender,
        userId: animal.userId,
        shelterId: animal.shelterId,
        size: animal.size,
        animalType: animal.animalType,
        createdAt: animal.createdAt
    });
}

export function makeAnimalsRepository({ db }: Pick<Dependencies, 'db'>): IAnimalsRepository {
    return {
        async create({ animal }) {
            const { id } = await db.animal.create({
                data: {
                    id: animal.id,
                    name: animal.name,
                    type: animal.type,
                    age: animal.age,
                    breed: animal.breed,
                    description: animal.description,
                    birthDate: animal.birthDate,
                    gender: animal.gender,
                    userId: animal.userId,
                    shelterId: animal.shelterId,
                    size: animal.size,
                    animalType: animal.animalType,
                    createdAt: animal.createdAt
                }
            });
            return { id };
        },

        async getByID({ id }) {
            const animal = await db.animal.findUnique({
                where: {
                    id
                }
            });
            if (!animal) return null;
            return toEntity(animal);
        },

        async getAll() {
            const animals = await db.animal.findMany();
            return animals.map(toEntity);
        },

        async update({ animal }) {
            await db.animal.update({
                where: { id: animal.id },
                data: {
                    name: animal.name,
                    type: animal.type,
                    age: animal.age,
                    breed: animal.breed,
                    description: animal.description,
                    birthDate: animal.birthDate,
                    gender: animal.gender,
                    userId: animal.userId,
                    shelterId: animal.shelterId,
                    size: animal.size,
                    animalType: animal.animalType,
                    createdAt: animal.createdAt
                }
            });
        },

        async delete({ id }) {
            await db.animal.delete({where: { id }});
        },
    }
}
