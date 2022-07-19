import supertest from 'supertest';
import app from '../index';
import { fileExists } from '../utils/filesUtils';
import path from 'path';

const request = supertest(app);

describe('Test app functionality', () => {
  it('App can resize an image', async (done) => {
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
});
