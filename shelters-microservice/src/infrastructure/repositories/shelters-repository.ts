import { ISheltersRepository } from "@application/common/interfaces";
import { Shelter } from "@domain/entities";
import { Dependencies } from "@infrastructure/di";
import { Shelter as ShelterModel } from "@prisma/client";
export function makeSheltersRepository({ db}: Pick<Dependencies, 'db'>): ISheltersRepository{
    return {
        async create({shelter}){
            const {id} = await db.shelter.create({
                data: {
                    name: shelter.name,
                    description: shelter.description,
                    address: shelter.address,
                    phoneNumber: shelter.phoneNumber,
                    email: shelter.email,
                    isVerified: shelter.isVerified,
                    createAt: shelter.createAt,
                    userId: shelter.userId
                },
            });

            return {id};
        },

        async getById({id}){
            const shelter = await db.shelter.findFirst({where: {id}});
            if (!shelter) return null;
            return toEntity(shelter);
        },

        async getAll(){
            const shelters = await db.shelter.findMany();
            return shelters.map(toEntity);
        },

        async update({shelter}){
            await db.shelter.update({
                where: {id: shelter.id},
                data: {
                    name: shelter.name,
                    description:shelter.description,
                    address:shelter.address,
                    phoneNumber:shelter.phoneNumber,
                    email:shelter.email,
                    isVerified:shelter.isVerified,
                    createAt:shelter.createAt,
                    userId:shelter.userId
                },
            });
        },

        async delete({id}){
            await db.shelter.delete({where: {id}});
        }
    };

    function toEntity(shelter: ShelterModel): Shelter{
        return new Shelter({
            id: shelter.id,
            name: shelter.name,
            description:shelter.description,
            address:shelter.address,
            phoneNumber:shelter.phoneNumber,
            email:shelter.email,
            isVerified:shelter.isVerified,
            createAt:shelter.createAt,
            userId:shelter.userId
        });
    }
}
