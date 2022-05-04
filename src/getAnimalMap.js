const data = require('../data/zoo_data');

let a;
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
const true1 = (options) => {
  if (options.includeNames === true && options.sex === undefined) {
    if (options.sorted === true) {
      return chamar4Vezes(false, 1);
    } return chamar4Vezes();
  }
};
const true2 = (options) => {
  if (options.sex === 'female') {
    if (options.sorted === undefined) {
      return chamar4Vezes('female');
    } return chamar4Vezes('female', 1);
  }
};
const true3 = (options) => {
  if (options.sex === 'male') {
    if (options.sorted === undefined) {
      return chamar4Vezes('male');
    } return chamar4Vezes('male', 1);
  } return chamar4Vezes(false, 1);
};
const comIncludNamesTrue = (options) => {
  if (true1(options) !== undefined) {
    return true1(options);
  } if (true2(options) !== undefined) {
    return true2(options);
  } if (true3(options) !== undefined) {
    return true3(options);
  }
};
semNada();
function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    const map = { NE, NW, SE, SW };
    return map;
  } return comIncludNamesTrue(options);
}

if (a === 37) {
  console.log(a);
}

module.exports = getAnimalMap;
