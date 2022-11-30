'use strict'

const {app} = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('Validates name query for /person endpoint', () => {
  let req ={};
  let res = {};
  let next = jest.fn();
  it('given name in query, the output object is correct', async() => {
    const response = await request.get('/person?name=elias');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(typeof(response)).toEqual('object')
  });
  it('responds 200 code if name /person?name=elias', async() => {
    const response = await request.get('/person?name=elias');
    expect(response.status).toBe(200);
  });
  it('responds with 500 code with query "/person?name="', async() => {
    const response = await request.get('/person?name=');
  expect(response.status).toBe(500);
  });
})
