import 'dotenv/config';
import 'reflect-metadata';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
const fileUpload = require('express-fileupload')

import {errorHandler} from './middlewares/errorHandler/errorHandler';
import dbInitConnection from './orm/dbInitConnection';
import routes from './api';
import {CustomError} from "./middlewares/errorHandler/customError";

export const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', routes);

dbInitConnection.initialize()
    .then(() => {
        app.listen(8080, listenCallback);
    })
    .catch((error) => new CustomError(503, "General", "No db connection", [error]))

app.use(errorHandler);

const listenCallback = () => {
    console.log(`Server running on port ${8080}`);
    console.log('Database initialized.')
}