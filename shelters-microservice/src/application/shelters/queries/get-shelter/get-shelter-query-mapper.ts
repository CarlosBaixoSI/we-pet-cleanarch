import { Shelter } from "@domain/entities";

export function toDto(shelter: Shelter) {
    return {
        id: shelter.id,
        name: shelter.name,
        description: shelter.description,
        address: shelter.address,
        phoneNumber: shelter.phoneNumber,
        email: shelter.email,
        isVerified: shelter.isVerified,
        createAt: shelter.createAt
    }
}
