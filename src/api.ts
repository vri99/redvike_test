import {Router} from 'express';
import reservationRouter from './routes/reservation';
import amenityRouter from './routes/amenity';

const router = Router();

router.use('/reservation', reservationRouter);
router.use('/amenity', amenityRouter);

export default router;