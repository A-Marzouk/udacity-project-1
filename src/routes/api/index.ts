import express, { Request, Response } from 'express';
import imagesRoutes from './images';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('API ENDPOINT');
});

router.use('/images', imagesRoutes);

export default router;
