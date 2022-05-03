const data = require('../data/zoo_data');

function getAnimalMap(options) {
  //funcoes
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
  const comIncludNames = ((posicao, sex, sorted) => {
    let XX = [];
    posicao.forEach((especie) => {
      esse = data.species.find((animalZoo) => animalZoo.name === especie);
      const nomes = []
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
  //chamadas
  semNada();
  if (options === undefined || options.includeNames === false || options.includeNames === undefined) {
    const map = {
      NE: NE1, NW: NW1, SE: SE1, SW: SW1,
    }
    return map;
  } if (options.includeNames === true && options.sex === undefined) {
    if (options.sorted === true) {
      const NE2 = comIncludNames(NE1, false, 1);
      const NW2 = comIncludNames(NW1, false, 1);
      const SE2 = comIncludNames(SE1, false, 1);
      const SW2 = comIncludNames(SW1, false, 1);
      return { NE: NE2, SE: SE2, SW: SW2, NW: NW2 };
    } else {
      const NE2 = comIncludNames(NE1);
      const NW2 = comIncludNames(NW1);
      const SE2 = comIncludNames(SE1);
      const SW2 = comIncludNames(SW1);
      return { NE: NE2, SE: SE2, SW: SW2, NW: NW2 };
    }

  }
  if (options.sex === 'female') {
    if (options.sorted === undefined) {
      const NE2 = comIncludNames(NE1, 'female');
      const NW2 = comIncludNames(NW1, 'female');
      const SE2 = comIncludNames(SE1, 'female');
      const SW2 = comIncludNames(SW1, 'female');
      return { NE: NE2, SE: SE2, SW: SW2, NW: NW2 };
    } if (options.sorted === true) {
      const NE2 = comIncludNames(NE1, 'female', 1);
      const NW2 = comIncludNames(NW1, 'female', 1);
      const SE2 = comIncludNames(SE1, 'female', 1);
      const SW2 = comIncludNames(SW1, 'female', 1);
      return { NE: NE2, SE: SE2, SW: SW2, NW: NW2 };
    }
  } if (options.sex === 'male') {
    if (options.sorted === undefined) {
      const NE2 = comIncludNames(NE1, 'male');
      const NW2 = comIncludNames(NW1, 'male');
      const SE2 = comIncludNames(SE1, 'male');
      const SW2 = comIncludNames(SW1, 'male');
      return { NE: NE2, SE: SE2, SW: SW2, NW: NW2 };
    } else {
      const NE2 = comIncludNames(NE1, 'male', 1);
      const NW2 = comIncludNames(NW1, 'male', 1);
      const SE2 = comIncludNames(SE1, 'male', 1);
      const SW2 = comIncludNames(SW1, 'male', 1);
      return { NE: NE2, SE: SE2, SW: SW2, NW: NW2 };
    }
  } if (options.sorted === true) {
    const NE2 = comIncludNames(NE1, false, 1);
    const NW2 = comIncludNames(NW1, false, 1);
    const SE2 = comIncludNames(SE1, false, 1);
    const SW2 = comIncludNames(SW1, false, 1);
    return { NE: NE2, SE: SE2, SW: SW2, NW: NW2 };
  }
}
/*
posibilidades:
  sex female
    sem sorted - 1
    com sorted - 2 
  sex male
    sem sorted - 3
    com sorted - 4 
  sem sex
    com sorted - 5
*/
module.exports = getAnimalMap;
