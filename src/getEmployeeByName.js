const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const array = data.employees.filter((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  if (array[0] === undefined) {
    return {};
  }
  return array[0];
}

module.exports = getEmployeeByName;

const array = [{1: 1}];

console.log(array[0]);
