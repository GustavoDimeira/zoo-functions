const data = require('../data/zoo_data');

function getEmployeeByName(Name) {
  const array = data.employees.filter((empl) => empl.firstName === Name || empl.lastName === Name);
  if (array[0] === undefined) {
    return {};
  }
  return array[0];
}

module.exports = getEmployeeByName;
