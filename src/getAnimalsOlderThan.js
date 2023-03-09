const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const especie = data.species.find((elemento) => elemento.name === animal);
  const verificaIdade = especie.residents.every((animais) => animais.age >= age);
  return verificaIdade;
};

module.exports = getAnimalsOlderThan;
