import supertest from 'supertest';
import app from '../app';

const request = supertest(app);
describe('Testing endpoints reponses', () => {
  it('should get the response from root route', async (done) => {
    const reponse = await request.get('/');

    expect(reponse.status).toBe(200);
    done();
  });

  it('should get the reponse 400 from image route for missing values', async (done) => {
    const reponse = await request.get('/image');

    expect(reponse.status).toBe(400);
    done();
  });

  it('should get the reponse 200 from image route', async (done) => {
    const reponse = await request.get('/image?name=fjord&width=100&height=100');

    expect(reponse.status).toBe(200);
    done();
  });
});
