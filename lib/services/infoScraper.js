const request = require('superagent');
const cheerio = require('cheerio');
const getTekkenNames = require('./nameScraper');

function getCharacterInfo() {
  return getTekkenNames()
    .then(characters => {
      return Promise.all(characters.map(character => {
        return request
          .get(`https://tekken.fandom.com/wiki/${character}`)
          .then(html => {
          
            const $ = cheerio.load(html.text);
            const imageSrc = $('.pi-image-thumbnail').attr('src');
            const characterObj = { character, imageSrc };
        
            $('.pi-item.pi-data.pi-item-spacing.pi-border-color').each((i, el) => {
              const element = $(el);
              
              if(element.children('h3').text() === 'Origin') {
                characterObj['origin'] = element.children('div').contents().last().text().trim();
              }
              if(element.children('h3').text() === 'Height') {
                characterObj['height'] = element.children('div').contents().text();
              }
              if(element.children('h3').text() === 'Weight') {
                characterObj['weight'] = element.children('div').contents().text();
              }
              if(element.children('h3').text() === 'Eyes') {
                characterObj['eyes'] = element.children('div').contents().text();
              }
              if(element.children('h3').text() === 'Hair') {
                characterObj['hair'] = element.children('div').contents().text();
              }
              if(element.children('h3').text() === 'Fighting Style') {
                characterObj['fightingStyle'] = element.children('div').contents().text();
              } 
              if(element.children('h3').text() === 'Species') {
                characterObj['species'] = element.children('div').contents().text();
              } 
              if(element.children('h3').text() === 'Gender') {
                characterObj['gender'] = element.children('div').contents().text();
              }
              if(element.children('h3').text() === 'Age') {
                characterObj['age'] = element.children('div').contents().text();
              }
              if(element.children('h3').text() === 'Family') {
                characterObj['family'] = element.children('div').contents().text();
              }
              if(element.children('h3').text() === 'Status') {
                characterObj['status'] = element.children('div').contents().text();
              }
              if(element.children('h3').text() === 'Birthday') {
                characterObj['birthday'] = element.children('div').contents().text();
              }
              if(element.children('h3').text() === 'Hobby') {
                characterObj['hobby'] = element.children('div').contents().text();
              }
              if(element.children('h3').text() === 'Blood Type') {
                characterObj['bloodtype'] = element.children('div').contents().text();
              }
              if(element.children('h3').text() === 'Occupation') {
                characterObj['occupation'] = element.children('div').contents().text();
              }
              if(element.children('h3').text() === 'Alignment') {
                characterObj['alignment'] = element.children('div').contents().text();
              }
            });
            return characterObj;
          });
      }));
    });
}

module.exports = getCharacterInfo;
