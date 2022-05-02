const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((pessoa) => {
    if (pessoa.age < 18) {
      child += 1
    } else if (pessoa.age < 50) {
      adult += 1
     } else {
       senior += 1;
     }
  });
  const entradas = { child, adult, senior };
  return entradas;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const child = countEntrants(entrants).child * data.prices.child;
  const adult = countEntrants(entrants).adult * data.prices.adult;
  const senior = countEntrants(entrants).senior * data.prices.senior;
  const Total = child + adult + senior;
  return Total;
}

module.exports = { calculateEntry, countEntrants };
