import supertest from 'supertest';
import app from '../index';
import { fileExists } from '../utils/utils';

const request = supertest(app);

describe('Test app functionality', () => {
  it('App can resize an image', async (done) => {
    const filename = 'fjord';
    const expectedFilePath = `./src/assets/thumbs/${filename}.jpg`;

    const response = await request.get(
      `/api/images?filename=${filename}&width=200&height=200`
    );

    expect(response.status).toBe(200);

    expect(fileExists(expectedFilePath)).toBeTruthy();

    done();
  });
});
