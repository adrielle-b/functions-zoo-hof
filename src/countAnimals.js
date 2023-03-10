const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const todosAnimais = () => {
  const qtdAnimais = species.reduce((novoValor, { name, residents }) =>
    ({ ...novoValor, [name]: residents.length }), {});
  return qtdAnimais;
};

const qtdAnimalParametro = (animal) => {
  const qtdAnimal = data.species
    .find((elemento) => elemento.name === animal.species).residents.length;
  return qtdAnimal;
};

const qtdAnimalGenero = (animal) => {
  const qtdGenero = data.species.find((elemento) => elemento.name === animal.species);
  return qtdGenero.residents.filter((elemento) => elemento.sex === animal.sex).length;
};

const countAnimals = (animal) => {
  if (!animal) {
    return todosAnimais();
  }
  if (Object.values(animal).length === 1) {
    return qtdAnimalParametro(animal);
  }
  return qtdAnimalGenero(animal);
};

module.exports = countAnimals;
