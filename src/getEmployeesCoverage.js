const data = require('../data/zoo_data');

const novoRelatorio = (colaborador) => {
  const animais = data.species.filter((animal) => colaborador.responsibleFor.includes(animal.id));
  const nomesAnimais = animais.map(({ name }) => name);
  const localizacaoAnimais = animais.map(({ location }) => location);
  return {
    id: colaborador.id,
    fullName: `${colaborador.firstName} ${colaborador.lastName}`,
    species: nomesAnimais,
    locations: localizacaoAnimais,
  };
};

const relatorioTodosEmployees = () => data.employees
  .map((colaborador) => novoRelatorio(colaborador));

const getEmployeesCoverage = (param) => {
  const todosRelatorios = relatorioTodosEmployees();
  if (!param) return todosRelatorios;
  if (todosRelatorios.some(({ fullName }) => fullName.includes(param.name))) {
    return todosRelatorios.find(({ fullName }) => fullName.includes(param.name));
  }
  if (todosRelatorios.some(({ id }) => id === param.id)) {
    return todosRelatorios.find(({ id }) => id === param.id);
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
