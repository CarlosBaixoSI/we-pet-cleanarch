import { Dependencies } from '@web/crosscutting/container';
import { createHash } from 'crypto';
import { IRouter }  from 'express';

export function animalsController({dependencies, router}: {dependencies: Dependencies, router: IRouter}){
    router.get('/api/v1/animals', async function getAnimals(request, response, next) {
        try {
            const result = await dependencies.animals.queries.getAnimals();

            return response.status(200).json(result);
        } catch (error) {
            return next(error);
        }
    });

    router.get('/api/v1/animals/:id', async function getAnimalById(request, response, next) {
        try{
            const result = await dependencies.animals.queries.getAnimalById(request.params.id);
            return response.status(200).json(result);
        } catch (error) {
            return next(error);
        }
    });

    router.post('/api/v1/animals', async function createAnimal(request, response, next) {
        try {
            const result = await dependencies.animals.commands.createAnimal(request.body);
            return response.status(201).json(result);
        } catch (error) {
            return next(error);
        }
    });

    router.put('/api/v1/animals/:id', async function updateAnimal(request, response, next) {
        try {
            const result = await dependencies.animals.commands.updateAnimal(request.params.id, request.body);
            return response.status(200).json(result);
        } catch (error) {
            return next(error);
        }
    });

    router.delete('/api/v1/animals/:id', async function deleteAnimal(request, response, next) {
        try {
            const result = await dependencies.animals.commands.deleteAnimal(request.params.id);
            return response.status(204).json(result);
        } catch (error) {
            return next(error);
        }
    });
    return router;
}
