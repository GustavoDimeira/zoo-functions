const data = require('../data/zoo_data');

function getAnimalsOlderThan(animalPassado, age) {
  const animal = data.species.find((animal) => animal.name === animalPassado);
  return animal.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
