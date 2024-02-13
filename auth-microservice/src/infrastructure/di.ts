import { PrismaClient } from '@prisma/client';
import { asFunction, asValue, Resolver } from 'awilix';
import * as Interfaces from '@application/common/interfaces';
import { makeUsersInfoRepository } from './repositories/users-info-repository';
import { makeLogger } from './logger';

export type Dependencies = {
  db: PrismaClient;
  usersInfoRepository: Interfaces.IUsersInfoRepository;
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
        usersInfoRepository: asFunction(makeUsersInfoRepository).singleton() as Resolver<Interfaces.IUsersInfoRepository>,
        logger: asFunction(makeLogger).singleton() as Resolver<Interfaces.ILogger>
    };
}
