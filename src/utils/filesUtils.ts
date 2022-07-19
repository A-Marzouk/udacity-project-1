import { promises as fs } from 'fs';
import sharp from 'sharp';

export const fileExists = async (path: string): Promise<boolean> => {
  return !!(await fs.stat(path).catch(() => false));
};

export const resizeImageFile = async (
  filePath: string,
  resizedFilePath: string,
  width: string,
  height: string
): Promise<void> => {
  const image = await fs.readFile(filePath);

  await sharp(image)
    .resize({
      width: parseFloat(width),
      height: parseFloat(height)
    })
    .toFile(resizedFilePath);
};
