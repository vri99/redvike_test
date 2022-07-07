import 'reflect-metadata'
import * as express from 'express'
import AppDataSource from '../db';
import router from './router/index';

AppDataSource.initialize()
    .then(() => {
        const app = express();

        app.set("env", process.env.APP_ENV);

        app.use('/api', router)

        app.listen(3000)
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
