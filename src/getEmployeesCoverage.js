const data = require('../data/zoo_data');

/*
Se o objeto de opções tiver a propriedade name, retorna somente a pessoa correspondente; feito
A propriedade name do objeto de opções também funciona usando o segundo nome; feito
Se o objeto de opções tiver a propriedade id, retorna somente a pessoa correspondente; 
Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias;
Caso não haja nenhuma pessoa com o nome ou id especificados deverá ser lançado um error.
*/

const expected = {
  id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
  fullName: 'Sharonda Spry',
  species: ['otters', 'frogs'],
  locations: ['SE', 'SW'],
};

//ver os ids dos animais usando o foreach no respnsiblefor, e com isso pegar o nome e as localizações e colocar cada um em um array
//usar um if para cada localização, se ela estiver no array de localizações, adicionar a variavel das localizações final, dessa forma a localização não se repete

let animalNome = [];
let localizacao = [];
//usar o spread e lembrar de resetar as variaeis
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
  const final =
  {
    id: objPessoa.id,
    fullName: `${objPessoa.firstName} ${objPessoa.lastName}`,
    species: animalNome,
    locations: localizacao,
  };
  return final;
}
const porNome = (name) => {
  //procura o nome e passa um obj pesssoa find
  const objPessoa = data.employees.find((pessoa) => pessoa.firstName === name);
  if (objPessoa !== undefined) {
    return criarObj(objPessoa);
  }
  //procura o sobrenome passa obj pessoa find
  const objPessoa2 = data.employees.find((pessoa) => pessoa.lastName === name);
  if (objPessoa2 !== undefined) {
    return criarObj(objPessoa2);
  }
  //mensagem de erro
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
  //cria um com todos map
  let todos = []
  data.employees.forEach((pessoa) => {
    todos = [...todos, criarObj(pessoa)];
  });
  return todos;
};
function getEmployeesCoverage(options) {
  if (options === undefined) {
    //pegar todos
    return todos();
  } if (options.name !== undefined) {
    return porNome(options.name);
    //procuar nome e sobrenome feito
    //lançar erro se n achcar feito
  } if (options.id !== undefined) {
    return porId(options.id);
    //pegar pessoa por id
    //lançar erro se n achar feito
  }
};

module.exports = getEmployeesCoverage;

console.log(getEmployeesCoverage());
