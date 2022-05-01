const data = require('../data/zoo_data');

let objFinal;
data.species.forEach((specie1) => {
  const nome = specie1.name;
  const quantia = specie1.residents.length;
  objFinal = {
    ...objFinal,
    [nome]: quantia,
  };
});

function countAnimals(animal) {
  if (animal === undefined) {
    return objFinal;
  } 
  const { specie, sex } = animal;
  const oAnimal = data.species.find((aanimal) => aanimal.name === specie);
  if (animal.specie !== undefined && animal.sex !== undefined) {
    if (sex === 'female') {
      const femeas = oAnimal.residents.filter((aanimal) => aanimal.sex === 'female');
      return femeas.length;
    } if (sex === 'male') {
      const machos = oAnimal.residents.filter((aanimal) => aanimal.sex === 'male');
      return machos.length;
    }
  }
  return oAnimal.residents.length;
};

module.exports = countAnimals;
