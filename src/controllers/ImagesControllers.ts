import { NextFunction, Request, Response } from 'express';
import processImageQuery from '../interfaces/images';
import { fileExists, resizeImageFile } from '../utils/filesUtils';

export const processImage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { filename, height, width } = req.query as unknown as processImageQuery;

  const filePath = `./src/assets/images/${filename}.jpg`;
  const resizedFilePath = `./src/assets/thumbs/${filename}_${width}_${height}.jpg`;

  const alreadyResized = await fileExists(resizedFilePath);

  if (!alreadyResized) {
    try {
      await resizeImageFile(filePath, resizedFilePath, width, height);
    } catch (e) {
      next(e);
    }
  }

  return res.status(200).sendFile(resizedFilePath, { root: '.' });
};
