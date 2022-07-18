import { Request, Response } from 'express';
import sharp from 'sharp';
import { promises as fs } from 'fs';
import processImageQuery from '../interfaces/images';

export const processImage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { filename, height, width } = req.query as unknown as processImageQuery;

  const filePath = `./src/assets/images/${filename}.jpg`;
  const resizedFilePath = filePath.replace('images', 'thumbs');

  const alreadyResized = await fileExists(resizedFilePath);

  if (alreadyResized) {
    return res.status(200).sendFile(resizedFilePath, { root: '.' });
  }

  const myFile = await fs.readFile(filePath);

  await sharp(myFile)
    .resize({
      width: parseFloat(width),
      height: parseFloat(height)
    })
    .toFile(`./src/assets/thumbs/${filename}.jpg`);

  return res.status(200).sendFile(resizedFilePath, { root: '.' });
};

const fileExists = async (path: string): Promise<boolean> => {
  return !!(await fs.stat(path).catch(() => false));
};
