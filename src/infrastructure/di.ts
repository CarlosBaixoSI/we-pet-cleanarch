import { PrismaClient } from '@prisma/client';
import { asFunction, asValue, Resolver } from 'awilix';


export type Dependencies = {
    db: PrismaClient;
    //logger: Interfaces.ILogger;
}

export function makeInfrastructure(): { [dependency in keyof Dependencies]: Resolver<Dependencies[dependency]> }
    {
        const db = new PrismaClient();

    db.$connect().catch(() => {
        console.error('Failed to connect to database');
        process.exit(1);
    });

    return {
        db: asValue(db),

    }

}