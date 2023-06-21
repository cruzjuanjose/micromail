const request = require('supertest');
const app = require('../app');

describe('File Controller', () => {
  it('should upload a file successfully', async () => {
    const response = await request(app)
      .post('/api/v1/file/upload')
      .attach('file', './test/test-file.txt');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('filename');
  });

  it('should get a file successfully', async () => {
    const response = await request(app).get('/api/v1/file/file');

    expect(response.statusCode).toBe(200);
    expect(response.header['content-type']).toBeTruthy();
  });

  it('should delete a file successfully', async () => {
    const response = await request(app).delete('/api/v1/file/file');

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('File deleted successfully');
  });
});
