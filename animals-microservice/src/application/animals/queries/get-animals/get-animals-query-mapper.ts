import { Animal } from '@domain/entities';

export function toDto(animals: Animal[]){
    return animals.map(animal => ({
        id: animal.id,
        name: animal.name,
        birthDate: animal.birthDate,
        description: animal.description,
        gender: animal.gender,
        userId: animal.userId,
        shelterId: animal.shelterId,
        size: animal.size,
        animalType: animal.animalType,
        breed: animal.breed,
        createdAt: animal.createdAt
    }));
}
