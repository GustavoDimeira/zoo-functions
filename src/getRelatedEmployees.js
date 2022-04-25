const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const objEmpregados = data.employees.filter((employee) => employee.managers.includes(managerId));
    const empregados = [];
    objEmpregados.forEach((empregado) => empregados.push(`${empregado.firstName} ${empregado.lastName}`));
    return empregados;
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
