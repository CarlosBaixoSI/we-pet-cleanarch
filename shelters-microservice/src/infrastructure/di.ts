import { PrismaClient } from '@prisma/client';
import { asFunction, asValue, Resolver } from 'awilix';
import * as Interfaces from "@application/common/interfaces";
import { makeSheltersRepository } from './repositories/shelters-repository';
import { makeLogger } from './logger';

export type Dependencies = {
    db: PrismaClient;
    logger: Interfaces.ILogger;
    sheltersRepository: Interfaces.ISheltersRepository;
};

export function makeInfrastructure(): {[dependency in keyof Dependencies]: Resolver<Dependencies[dependency]>} {
    const db = new PrismaClient();

    db.$connect().catch(() => {
        console.error('Could not connect to database');
        process.exit(1);
    });

    return {
        db: asValue(new PrismaClient()),
        sheltersRepository: asFunction(makeSheltersRepository).singleton() as Resolver<Interfaces.ISheltersRepository>,
        logger: asFunction(makeLogger).singleton() as Resolver<Interfaces.ILogger>
    };
}
