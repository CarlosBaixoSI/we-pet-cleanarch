import express from 'express';
import * as middlewares from './middlewares';
//import Dependencies from './dependencies';

export function makeApp(){
    const app = express();
    
    middlewares.onRequest({app});
    return app;
}