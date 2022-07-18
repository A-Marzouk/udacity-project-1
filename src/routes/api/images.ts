import express from 'express';
import { validateProcessImages } from '../../middleware/validators/validateProcessImages';
import { processImage } from '../../controllers/ImagesControllers';

const router = express.Router();

router.get('/', validateProcessImages, processImage);

export default router;
