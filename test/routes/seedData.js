const Character = require('../../lib/models/Character');

const characters = [  
  {
    'character': 'Armor_King',
    'imageSrc': 'https://vignette.wikia.nocookie.net/tekken/images/a/a8/ArmorKingTAG.jpg/revision/latest/scale-to-width-down/310?cb=20080304063624&path-prefix=en',
    'height': '193 cm (6′4″)',
    'weight': '91 kg (200 lbs)',
    'allignment': 'Neutral (TK1)  Good (TK2 onwards)'
  },
  {
    'character': 'Akuma',
    'imageSrc': 'https://vignette.wikia.nocookie.net/tekken/images/5/5f/Tekken-7-Akuma-CG-art.jpg/revision/latest/scale-to-width-down/310?cb=20170408183224&path-prefix=en',
    'height': '178 cm (5′10″)',
    'weight': '80 kg (176 lbs)',
    'alignment': 'Neutral/Evil'
  },
  {
    'character': 'Anna_Williams',
    'imageSrc': 'https://vignette.wikia.nocookie.net/tekken/images/c/c2/Tekken-7_2018_08-06-18_015.jpg/revision/latest/scale-to-width-down/310?cb=20180806193707&path-prefix=en',
    'height': '163 cm (5′4″)',
    'weight': '49 kg (108 lbs)',
    'alignment': 'Neutral'
  },
  {
    'character': 'Craig_Marduk',
    'imageSrc': 'https://vignette.wikia.nocookie.net/tekken/images/1/11/Craig_Marduk_T7.jpg/revision/latest/scale-to-width-down/310?cb=20181203160700&path-prefix=en',
    'height': '214 cm (7′0″)',
    'weight': '170 kg (376 lbs)',
    'alignment': 'Neutral (TK4-TK5)Good (TK5-onwards)'
  },
  {
    'character': 'Eddy_Gordo',
    'imageSrc': 'https://vignette.wikia.nocookie.net/tekken/images/5/56/Eddy_Gordo_T7.jpg/revision/latest/scale-to-width-down/310?cb=20170408103724&path-prefix=en',
    'height': '188 cm (6′2″)',
    'weight': '75 kg (165 lbs)',
    'alignment': 'Good (TK3-onwards)Neutral (TK6)'
  }];

module.exports = () => {
  Promise.all(characters.map(character => {
    return Character.create(character);
  }));
};
