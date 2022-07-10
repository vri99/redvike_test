import { Router } from 'express';

const router = Router();

router.get('/:amenity_id/:day', (req, res, next) => {
    console.log("test");

    res.json({message: 'ok'})
});


export default router;