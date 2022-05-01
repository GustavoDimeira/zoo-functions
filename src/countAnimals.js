const data = require('../data/zoo_data');

let objFinal;
const semNada = data.species.forEach((specie1) => {
  const nome = specie1.name;
  const quantia = specie1.residents.length;
  objFinal = {
    ...objFinal,
    [nome]: quantia,
  }
  return objFinal;
});

function countAnimals(animal) {
  if (animal === undefined) {
    return objFinal;
  } else if (animal.specie !== undefined && animal.sex !== undefined) {
    const { specie, sex } = animal;
    if (sex === 'female') {
      const oAnimal = data.species.find((animal) => animal.name === specie);
      const femeas = oAnimal.residents.filter((animal) => animal.sex === 'female');
      return femeas.length;
    } else if (sex === 'male') {
      const oAnimal = data.species.find((animal) => animal.name === specie);
      const machos = oAnimal.residents.filter((animal) => animal.sex === 'male');
      return machos.length;
    }
  } const { specie } = animal;
  const oAnimal = data.species.find((animal) => animal.name === specie);
  return oAnimal.residents.length;
}

module.exports = countAnimals;
