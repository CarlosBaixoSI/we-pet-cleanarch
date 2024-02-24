import express from 'express';
import * as middlewares from './middlewares';
import { Dependencies } from '@web/crosscutting/container'
import * as controllers from '@web/api/controllers';

export function makeApp(dependencies: Dependencies){
    const app = express();

    middlewares.onRequest({app});

    app.use(controllers.animalsController({dependencies, router: express.Router()}));

    middlewares.onResponse({app, dependencies});

    return app;
}
