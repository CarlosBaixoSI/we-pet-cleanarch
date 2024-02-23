import express, { Application } from 'express';
import helmet from 'helmet';
import auth from './auth';

export function onRequest({app} : {app: Application}){
    app.use(express.json());
    app.use(helmet());
    app.use(auth);
}