import {Router} from 'express';
import {getReservations, getReservationsByUser} from "../controllers/reservation.controller";
import {CustomError} from "../middlewares/errorHandler/customError";
import fileUpload from "express-fileupload";
import csv from "csvtojson/index";
import {Readable} from "stream";
import {ReservationDto} from "../dtos/reservation.dto";
import {ReservationByUserDto} from "../interfaces/reservation.interface";

const router: Router = Router();
router.use(fileUpload());

router.get('/:amenity_id/:day', async (req, res, next) => {
    try {
        const result: ReservationDto[] = await getReservations(+req.params.amenity_id, req.params.day);
        res.json({data: result})
    } catch (e) {
        next(e);
    }
});

router.get('/:user_id', async (req, res, next) => {
    try {
        const result: ReservationByUserDto = await getReservationsByUser(+req.params.user_id);
        res.json({data: result})
    } catch (e) {
        next(e);
    }
});

router.post('/csv', async (req, res, next) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            throw new CustomError(400, "General", 'No files were uploaded.');
        }
        const filename: string = Object.keys(req.files)[0]

        if (filename in req.files) {
            const file: Buffer = req.files[filename]['data']
            const stream: Readable = Readable.from(file.toString());

            res.json(await csv().fromStream(stream));
        }

    } catch (e) {
        next(e);
    }
});

export default router;