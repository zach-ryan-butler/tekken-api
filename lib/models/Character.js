const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  character: {
    type: String,
    required: true
  },
  imageSrc: String,
  status: String,
  fightingStyle: String,
  origin: String,
  height: String,
  weight: String,
  eyes: String,
  hair: String,
  likes: String,
  dislikes: String,
  species: String,
  gender: String,
  birthday: String,
  age: String,
  bloodtype: String,
  occupation: String,
  hobby: String,
  alignment: String,
  family: String
});

module.exports = mongoose.model('Character', characterSchema);
