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
    return mongoose.connection.dropDatabase()
      .then(seedData());
  });

  afterAll(() => {
    return mongoose.connection.dropDatabase()
      .then(() => mongoose.connection.close());
  });
  
  it('can get a character by name', () => {
    return request(app)
      .get('/api/v1/characters?character=akuma')
      .then(res => {
        expect(res.body[0]).toEqual({
          _id: expect.any(String),
          character: 'Akuma',
          imageSrc: 'https://vignette.wikia.nocookie.net/tekken/images/5/5f/Tekken-7-Akuma-CG-art.jpg/revision/latest/scale-to-width-down/310?cb=20170408183224&path-prefix=en',
          height: '178 cm (5′10″)',
          weight: '80 kg (176 lbs)',
          alignment: 'Neutral/Evil',
          __v: 0
        });
      });
  });

  it('can get characters', () => {
    return request(app)
      .get('/api/v1/characters')
      .then(res => {
        expect(res.body).toHaveLength(5);
      });
  });
});
