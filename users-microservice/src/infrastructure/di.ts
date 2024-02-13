import { PrismaClient } from '@prisma/client';
import { asFunction, asValue, Resolver } from 'awilix';
import * as Interfaces from '@application/common/interfaces';
import { makeUsersRepository } from './repositories/users-repository';
import { makeLogger } from './logger';

export type Dependencies = {
  db: PrismaClient;
  usersRepository: Interfaces.IUsersRepository;
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
        usersRepository: asFunction(makeUsersRepository).singleton() as Resolver<Interfaces.IUsersRepository>,
        logger: asFunction(makeLogger).singleton() as Resolver<Interfaces.ILogger>
    };
}
