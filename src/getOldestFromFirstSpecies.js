const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieCuidada = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animais = data.species.find((specie) => specie.id === specieCuidada);
  const maisVleho = animais.residents.reduce((acc, animal) => acc.age < animal.age ? animal : acc)
  const { name, sex, age } = maisVleho;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
