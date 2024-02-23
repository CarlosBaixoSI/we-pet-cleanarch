import { Dependencies } from '@web/crosscutting/container';
import { IRouter } from 'express';
import permit from '../middlewares/request/permission';
import { CustomRequest } from '@application/common/interfaces/customRequest/ICustomRequest';

export function usersInfoController({ dependencies, router }: { dependencies: Dependencies; router: IRouter }): IRouter {
  router.post('/api/v1/auth/signin', async function signIn(request, response, next) {
    try {
      const result = await dependencies.users.commands.signIn(request.body);

      return response.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  });

  router.post('/api/v1/auth/signup', async function signUp(request, response, next) {
    try {
      const result = await dependencies.users.commands.signUp(request.body);

      return response.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  });

  // router.get('/api/v1/auth/:id', async function getUser(request, response, next) {
  //   try {
  //     const result = await dependencies.users.queries.getUser({ id: Number(request.params.id) });
  //     return response.status(200).json(result);
  //   } catch (error) {
  //     return next(error);
  //   }
  // });

  // router.post('/api/v1/auth', async function createUser(request, response, next) {
  //   try {
  //     const result = await dependencies.users.commands.createUser(request.body);
  //     return response.status(200).json(result);
  //   } catch (error) {
  //     return next(error);
  //   }
  // });

  router.route('/api/v1/auth/:id').delete(permit(['admin']), async function deleteUser(request, response, next) {
    try {
      const result = await dependencies.users.commands.deleteUserInfo({ idUserToDelete: Number(request.params.id) });
      
      return response.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  });

  // router.patch('/api/v1/auth/:id', async function updateUser(request, response, next) {
  //   try {
  //     const result = await dependencies.users.commands.updateUser({ id: Number(request.params.id), ...request.body });
  //     return response.status(200).json({});
  //   } catch (error) {
  //     return next(error);
  //   }
  // });
  return router;
}
