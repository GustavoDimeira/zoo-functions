const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const aanimais = [];

  ids.forEach((id) => {
    const animais = data.species;
    const animalCerto = animais.find((animal) => animal.id === id);
    aanimais.push(animalCerto);
  });
  return aanimais;
}

module.exports = getSpeciesByIds;
