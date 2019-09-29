const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/', (req, res, next) => {
    const { ...search } = req.query;
    const query = Object.entries(search)
      .reduce((query, [key, value]) => {
        query[key] = new RegExp(value, 'i');
        return query;
      }, {});

    Character
      .find(query)
      .lean()
      .then(foundCharacter => res.send(foundCharacter))
      .catch(next);
  });
