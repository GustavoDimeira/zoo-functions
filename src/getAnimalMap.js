const data = require('../data/zoo_data');
let NE1 = [];
let NW1 = [];
let SE1 = [];
let SW1 = [];
const semNada = () => {
  data.species.forEach((sp) => {
    if (sp.location === 'NE') {
      NE1.push(sp.name);
    } if (sp.location === 'NW') {
      NW1.push(sp.name);
    } if (sp.location === 'SE') {
      SE1.push(sp.name);
    } if (sp.location === 'SW') {
      SW1.push(sp.name);
    }
  });
}
const addNomes = (sex, nomes) => {
  if (sex !== undefined && sex !== false) {
    esse.residents.forEach((resident) => {
      if (resident.sex === sex) {
        nomes.push(resident.name);
      }
    });
  } else {
    esse.residents.forEach((resident) => {
      nomes.push(resident.name);
    });
  }
}
const chamar4Vezes = (sex, sorted) => {
  const NE2 = comIncludNames(NE1, sex, sorted);
  const NW2 =comIncludNames(NW1, sex, sorted);
  const SE2 = comIncludNames(SE1, sex, sorted);
  const SW2 = comIncludNames(SW1, sex, sorted);
  return { NE: NE2, SE: SE2, SW: SW2, NW: NW2 };
}
const comIncludNames = ((posicao, sex, sorted) => {
  let XX = [];
  posicao.forEach((especie) => {
    esse = data.species.find((animalZoo) => animalZoo.name === especie);
    const nomes = []
    addNomes(sex, nomes);
    if (sorted === 1) {
      nomes.sort()
    }
    XX = [
      ...XX,
      { [especie]: nomes }
    ]
  });
  return XX;
});
semNada();
function getAnimalMap(options) {
  if (options === undefined || options.includeNames === false || options.includeNames === undefined) {
    const map = {
      NE: NE1, NW: NW1, SE: SE1, SW: SW1,
    }
    return map;
  } 
  if (options.includeNames === true && options.sex === undefined) {
    if (options.sorted === true) {
      return chamar4Vezes(false, 1);
    } else {
      return chamar4Vezes();
    }
  }
  if (options.sex === 'female') {
    if (options.sorted === undefined) {
      return chamar4Vezes('female');
    } if (options.sorted === true) {
      return chamar4Vezes('female', 1)
    }
  } if (options.sex === 'male') {
    if (options.sorted === undefined) {
      return chamar4Vezes('male');
    } else {
      return chamar4Vezes ('male', 1)
    }
  } if (options.sorted === true) {
    return chamar4Vezes(false, 1)
  }
}

module.exports = getAnimalMap;
