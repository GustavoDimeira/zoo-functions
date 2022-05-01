const data = require('../data/zoo_data');

function getEmployeeByName(Name) {
  const array = data.employees.filter((emplo) => emplo.firstName === Name || emplo.lastName === Name);
  if (array[0] === undefined) {
    return {};
  }
  return array[0];
}

module.exports = getEmployeeByName;