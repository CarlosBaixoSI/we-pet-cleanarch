import express, { Application } from 'express';
import helmet from 'helmet';
export function onRequest({app} : {app: Application}){
    app.use(express.json());
    app.use(helmet());
}