import supertest from 'supertest';
import app from '../index';
import { fileExists, resizeImageFile } from '../utils/filesUtils';
import path from 'path';
import { promises as fs } from 'fs';

const request = supertest(app);

describe('Test app functionality', () => {
  it('App can resize an image through request', async (done) => {
    const filename = 'fjord';
    const expectedFilePath = path.join(
      __dirname,
      `../../assets/thumbs/${filename}.jpg`
    );

    const response = await request.get(
      `/api/images?filename=${filename}&width=200&height=200`
    );

    expect(response.status).toBe(200);

    expect(fileExists(expectedFilePath)).toBeTruthy();

    done();
  });

  it('Resize function works properly', async () => {
    const width = '100';
    const height = '100';
    const filename = 'fjord';

    const filePath = path.join(
      __dirname,
      `../../assets/images/${filename}.jpg`
    );
    const fileSize = (await fs.stat(filePath)).size;

    const resizedFilePath = path.join(
      __dirname,
      `../../assets/thumbs/${filename}_${width}_${height}.jpg`
    );

    await resizeImageFile(filePath, resizedFilePath, width, height);

    const resizedFileSize = (await fs.stat(resizedFilePath)).size;

    expect(resizedFileSize).toBeLessThan(fileSize);
    expect(fileExists(resizedFilePath)).toBeTruthy();
  });
});
