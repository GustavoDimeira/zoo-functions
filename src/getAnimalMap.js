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
const addNomes = (sex, nomes, esse) => {
  if (sex !== undefined && sex !== false) {
    esse.residents.forEach((resid) => {
      resid.sex === sex ? nomes.push(resid.name) : nomes = nomes
    });
  } else {
    esse.residents.forEach((resid) => {
      nomes.push(resid.name);
    });
  }
};
const comIncludNames = ((posicao, sex, sorted) => {
  let XX = [];
  posicao.forEach((especie) => {
    esse = data.species.find((animalZoo) => animalZoo.name === especie);
    const nomes = []
    addNomes(sex, nomes, esse);
    let a;
    sorted === 1 ? nomes.sort() : a = 1;
    console.log(a);
    XX = [
      ...XX,
      { [especie]: nomes },
    ]
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
const comIncludNamesTrue = (options) => {
  if (options.includeNames === true && options.sex === undefined) {
    if (options.sorted === true) {
      return chamar4Vezes(false, 1);
    } return chamar4Vezes();
  } if (options.sex === 'female') {
    if (options.sorted === undefined) {
      return chamar4Vezes('female');
    } return chamar4Vezes('female', 1);
  } if (options.sex === 'male') {
    if (options.sorted === undefined) {
      return chamar4Vezes('male');
    } return chamar4Vezes ('male', 1);
  } return chamar4Vezes(false, 1);
};
semNada();
function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return { NE: NE, NW: NW, SE: SE, SW: SW }
  } return comIncludNamesTrue(options);
};

module.exports = getAnimalMap;
