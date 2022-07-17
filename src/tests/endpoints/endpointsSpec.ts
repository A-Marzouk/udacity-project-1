import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('Gets the api main endpoint', async (done) => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  });

  it('Gets the images api endpoint', async (done) => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
    done();
  });
});
