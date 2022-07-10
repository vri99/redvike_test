import 'reflect-metadata'
import express from 'express'
import AppDataSource from '../db';

AppDataSource.initialize()
    .then(() => {
        const app = express();

        app.set("env", process.env.APP_ENV);

        // app.use('/api', router);

        app.listen(3000)

        console.log('Listen on port: 8080');
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
