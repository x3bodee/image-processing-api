import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('in this test I will provide file name, width and height', () => {
  it('expect response status to be 200', async () => {
    try {
      const response = await request.get(
        '/resize?name=icelandwaterfall&width=500&height=300'
      );
      expect(response.status).toBe(200);
    } catch (err) {
      console.log(err);
    }
  });
});

describe('in this test I will not height', () => {
  it('expect response status to be 400', async () => {
    try {
      const response = await request.get(
        '/resize?name=icelandwaterfall&width=500'
      );
      expect(response.status).toBe(400);
    } catch (err) {
      console.log(err);
    }
  });
});
