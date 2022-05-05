const data = require('../data/zoo_data');

let animalNome = [];
let localizacao = [];
const speciesElocations = (objPessoa) => {
  animalNome = [];
  localizacao = [];
  objPessoa.responsibleFor.forEach((animalID) => {
    const objAnimal = data.species.find((especie) => especie.id === animalID);
    animalNome = [...animalNome, objAnimal.name];
    localizacao = [...localizacao, objAnimal.location];
  });
};
const criarObj = (objPessoa) => {
  speciesElocations(objPessoa);
  const final = {
    id: objPessoa.id,
    fullName: `${objPessoa.firstName} ${objPessoa.lastName}`,
    species: animalNome,
    locations: localizacao,
  };
  return final;
};
const porNome = (name) => {
  const objPessoa = data.employees.find((pessoa) => pessoa.firstName === name);
  if (objPessoa !== undefined) {
    return criarObj(objPessoa);
  }
  const objPessoa2 = data.employees.find((pessoa) => pessoa.lastName === name);
  if (objPessoa2 !== undefined) {
    return criarObj(objPessoa2);
  }
  if (objPessoa === undefined && objPessoa2 === undefined) {
    throw new Error('Informações inválidas');
  }
};
const porId = (id) => {
  const objPessoaID = data.employees.find((pessoa) => pessoa.id === id);
  if (objPessoaID === undefined) {
    throw new Error('Informações inválidas');
  } else {
    return criarObj(objPessoaID);
  }
};
const todos = () => {
  let todosEmpregados = [];
  data.employees.forEach((pessoa) => {
    todosEmpregados = [...todosEmpregados, criarObj(pessoa)];
  });
  return todosEmpregados;
};
function getEmployeesCoverage(options) {
  if (options === undefined) {
    return todos();
  } if (options.name !== undefined) {
    return porNome(options.name);
  } if (options.id !== undefined) {
    return porId(options.id);
  }
}

module.exports = getEmployeesCoverage;
