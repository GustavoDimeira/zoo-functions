const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieCuidada = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animais = data.species.find((specie) => specie.id === specieCuidada);
  const maisVleho = animais.residents.reduce((acc, animal) => {
    if (acc.age > animal.age) {
      return acc
    } return animal
  });
  const { name, sex, age } = maisVleho;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
