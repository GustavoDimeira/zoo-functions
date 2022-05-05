const data = require('../data/zoo_data');

const NE = [];
const NW = [];
const SE = [];
const SW = [];
const semNada = () => {
  data.species.forEach((sp) => {
    if (sp.location === 'NE') {
      NE.push(sp.name);
    } if (sp.location === 'NW') {
      NW.push(sp.name);
    } if (sp.location === 'SE') {
      SE.push(sp.name);
    } if (sp.location === 'SW') {
      SW.push(sp.name);
    }
  });
};
const addTrue = (sex, nomes, esse) => {
  esse.residents.forEach((resid) => {
    if (resid.sex === sex) {
      nomes.push(resid.name);
    }
  });
};
const addFalse = (nomes, esse) => {
  esse.residents.forEach((resid) => {
    nomes.push(resid.name);
  });
};
const comIncludNames = ((posicao, sex, sorted) => {
  let XX = [];
  posicao.forEach((especie) => {
    const esse = data.species.find((animalZoo) => animalZoo.name === especie);
    const nomes = [];
    if (sex !== undefined && sex !== false) {
      addTrue(sex, nomes, esse);
    } else {
      addFalse(nomes, esse);
    }
    if (sorted === 1) {
      nomes.sort();
    }
    XX = [
      ...XX,
      { [especie]: nomes },
    ];
  });
  return XX;
});
const chamar4Vezes = (sex, sorted) => {
  const NE2 = comIncludNames(NE, sex, sorted);
  const NW2 = comIncludNames(NW, sex, sorted);
  const SE2 = comIncludNames(SE, sex, sorted);
  const SW2 = comIncludNames(SW, sex, sorted);
  return { NE: NE2, SE: SE2, SW: SW2, NW: NW2 };
};
const semSex = (options) => {
  if (options.sorted === true) {
    return chamar4Vezes(false, 1);
  } return chamar4Vezes();
};
const female = (options) => {
  if (options.sorted === undefined) {
    return chamar4Vezes('female');
  } return chamar4Vezes('female', 1);
};
const male = (options) => {
  if (options.sorted === undefined) {
    return chamar4Vezes('male');
  } return chamar4Vezes('male', 1);
};
const comIncludNamesTrue = (options) => {
  if (options.includeNames === true && options.sex === undefined) {
    return semSex(options);
  } if (options.sex === 'female') {
    return female(options);
  } if (options.sex === 'male') {
    return male(options);
  }
};
semNada();
function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    const map = { NE, NW, SE, SW };
    return map;
  } return comIncludNamesTrue(options);
}

module.exports = getAnimalMap;
