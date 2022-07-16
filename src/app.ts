import 'dotenv/config';
import 'reflect-metadata';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import {errorHandler} from './middlewares/errorHandler/errorHandler';
import dbInitConnection from './orm/dbInitConnection';
import routes from './api';
import {CustomError} from "./middlewares/errorHandler/customError";
import {runSeeders} from "typeorm-extension";

export const app = express();

console.log("APP INITIALIZATION...");

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', routes);

dbInitConnection.initialize()
    .then(() => {
        runSeeders(dbInitConnection);
        app.listen(3000, listenCallback);
    })
    .catch((error) => {
        console.log(error)
        return new CustomError(503, "General", "No db connection", [error])
    })

app.use(errorHandler);

const listenCallback: () => void = (): void => {
    console.log(`Server running on port ${3000}`);
    console.log('Database initialized.')
}