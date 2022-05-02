const data = require('../data/zoo_data');

let objFinal;
data.species.forEach((specie1) => {
  const nome = specie1.name;
  objFinal = {
    ...objFinal,
    [nome]: specie1.residents.length,
  };
});

function countAnimals(animal) {
  if (animal === undefined) {
    return objFinal;
  }
  const { specie, sex } = animal;
  const oAnimal = data.species.find((aanimal) => aanimal.name === specie);
  if (sex === 'female') {
    const femeas = oAnimal.residents.filter((aanimal) => aanimal.sex === 'female');
    return femeas.length;
  } if (sex === 'male') {
    const machos = oAnimal.residents.filter((aanimal) => aanimal.sex === 'male');
    return machos.length;
  }
  return oAnimal.residents.length;
}

module.exports = countAnimals;
