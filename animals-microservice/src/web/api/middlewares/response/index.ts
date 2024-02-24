import { Application } from 'express';
import { makeHandleException } from './handle-exception';
import { makeHandleNotFound } from './handle-notfound';
import { Dependencies } from '@web/crosscutting/container';

export function onResponse({ app, dependencies }: { app: Application, dependencies: Dependencies }) {
    app.use('*', makeHandleNotFound());
    app.use(makeHandleException(dependencies));
  }