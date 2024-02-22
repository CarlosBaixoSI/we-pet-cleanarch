import { asFunction, Resolver } from 'awilix';
import { makeUsers } from './users';
import { makePasswordManagementService } from './services/passwordManagement/passwordManagementService';

export type Dependencies = {
  users: ReturnType<typeof makeUsers>;
  passwordManagementService: ReturnType<typeof makePasswordManagementService>;
};

export function makeApplication(): { [dependency in keyof Dependencies]: Resolver<Dependencies[dependency]> } {
  return {
    users: asFunction(makeUsers).singleton(),
    passwordManagementService: asFunction(makePasswordManagementService).singleton(),
  };
}