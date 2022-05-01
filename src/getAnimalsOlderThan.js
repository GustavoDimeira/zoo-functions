const data = require('../data/zoo_data');

function getAnimalsOlderThan(animalPassado, age) {
  const qualAnimal = data.species.find((animal) => animal.name === animalPassado);
  return qualAnimal.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
