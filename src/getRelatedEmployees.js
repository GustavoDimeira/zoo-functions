const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const objEmpregados = data.employees.filter((emplo) => emplo.managers.includes(managerId));
    const empregados = [];
    objEmpregados.forEach((empre) => empregados.push(`${empre.firstName} ${empre.lastName}`));
    return empregados;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
