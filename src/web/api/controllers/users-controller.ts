import { Dependencies } from "@web/crosscutting/container";
import { IRouter } from "express";

export function usersController({dependencies, router}: {dependencies: Dependencies, router: IRouter}) : IRouter{

    router.get('/api/v1/users', async function getUsers(request, response, next) {
        try{
            const result = await dependencies.users.queries.getUsers();

            return response.status(200).json(result);
        } catch(error) {
            return next(error);
        }
    });

    router.get('/api/v1/users/:id', async function getUser(request, response, next){
        try {
            const result = await dependencies.users.queries.getUser({id: Number(request.params.id)});
            return response.status(200).json(result);
        } catch (error) {
            return next(error);
        }
    })
    return router;
}