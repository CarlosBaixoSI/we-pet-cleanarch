import { Shelter } from "@domain/entities";

export function toDto(shelters: Shelter[]){
    return shelters.map(shelter => ({
        id: shelter.id,
        name: shelter.name,
        description: shelter.description,
        address: shelter.address,
        phoneNumber: shelter.phoneNumber,
        email: shelter.email,
        isVerified: shelter.isVerified,
        createAt: shelter.createAt
    }));
}
