import {Router} from 'express';
import reservationRouter from './routes/reservation.router';

const router: Router = Router();

router.use('/reservation', reservationRouter);

export default router;