import {NextFunction, Request, Response} from 'express';

import {CustomError} from './customError';

export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.log(err);

    if (!err.HttpStatusCode) {
        res.status(500).json({
            message: err.message,
        })
    }

    return res.status(err.HttpStatusCode).json(err.JSON);
};

