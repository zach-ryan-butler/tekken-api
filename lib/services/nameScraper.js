const request = require('superagent');
const cheerio = require('cheerio');

function getTekkenNames() {
  return request
    .get('https://tekken.fandom.com/wiki/Category:Characters')
    .then(html => {
      
      const $ = cheerio.load(html.text);
      const characterArr = [];
  
      $('.category-page__member').each(function(i, element) {
        const $element = $(element);
        const $characterName = $element.find('a').text();
        characterArr.push($characterName);
      });
        
      const filteredCharacterArr = characterArr.filter(char => {
        return !char.includes('Category');
      });
    
      return filteredCharacterArr.map(char => {
        return char.replace(' ', '_');
      });
    });
}

module.exports = getTekkenNames;
