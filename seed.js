require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const Character = require('./lib/models/Character');
const getCharacterInfo = require('./lib/services/infoScraper');


const seedData = () => {
  return getCharacterInfo()
    .then(mongoose.connection.dropDatabase())
    .then(characters => Character.create(characters))
    .then(() => console.log('done'))
    .catch(console.error)
    .finally(() => mongoose.connection.close());
};

seedData();
