import { Dependencies as InfrastructureDependencies, makeInfrastructure } from '@infrastructure/di';
import {Dependencies as ApplicationDependencies, makeApplication} from '@application/di'
import { createContainer } from 'awilix';
export type Dependencies = Pick<InfrastructureDependencies, 'logger'> & ApplicationDependencies;

export function makeContainer(){
    const container = createContainer();

    container.register({...makeInfrastructure(), ...makeApplication()})

    return container.cradle as Dependencies;
}