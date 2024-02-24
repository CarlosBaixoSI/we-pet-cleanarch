import { PrismaClient } from '@prisma/client';
import { asFunction, asValue, Resolver } from 'awilix';
import * as Interfaces from '@application/common/interfaces';
import { makeAnimalsRepository } from './repositories/animals-repository';
import { makeLogger } from './logger';


export type Dependencies = {
    db: PrismaClient;
    animalsRepository: Interfaces.IAnimalsRepository;
    logger: Interfaces.ILogger;
};

export function makeInfrastructure(): { [dependency in keyof Dependencies]: Resolver<Dependencies[dependency]> } {
    const db = new PrismaClient();

    db.$connect().catch(() => {
        console.error('Failed to connect to database');
        process.exit(1);
    });

    return {
        db: asValue(db),
        animalsRepository: asFunction(makeAnimalsRepository).singleton() as Resolver<Interfaces.IAnimalsRepository>,
        logger: asFunction(makeLogger).singleton() as Resolver<Interfaces.ILogger>
    };
}