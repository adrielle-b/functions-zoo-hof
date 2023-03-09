const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((pessoa) => pessoa.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const isGerenciadas = data.employees.filter((pessoa) => pessoa.managers.includes(managerId));
    return isGerenciadas.map((colaborador) => `${colaborador.firstName} ${colaborador.lastName}`);
  }
};

module.exports = { isManager, getRelatedEmployees };
