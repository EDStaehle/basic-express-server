const {app} = require('../src/server');
supertest = require('supertest');
const request = supertest(app);

describe
('API server', () => {
  it('handles root path', async() => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('hello world')
  });
})
