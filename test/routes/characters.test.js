require('dotenv').config();

const request = require('supertest');
const app = require('../../lib/app');
const mongoose = require('mongoose');
const seedData = require('./seedData');
const connect = require('../../lib/utils/connect');

describe('character routes', () => {

  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    seedData();
  });

  afterAll(() => {
    return mongoose.connection.dropDatabase()
      .then(() => mongoose.connection.close());
  });

  it('can get characters', () => {
    return request(app)
      .get('/api/v1/characters')
      .then(res => {
        expect(res.body).toHaveLength(5);
      });
  });
});
