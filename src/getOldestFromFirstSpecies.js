const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const colaborador = data.employees.find((pessoa) => pessoa.id === id);
  const especieResponsavel = colaborador.responsibleFor[0];
  const especie = data.species.find((animal) => especieResponsavel.includes(animal.id));
  const animaisOrdenados = especie.residents.sort((animal1, animal2) => {
    if (animal1.age > animal2.age) { return -1; }
    if (animal1.age < animal2.age) { return 1; }
    return 0;
  });
  const maisVelho = Object.values(animaisOrdenados[0]);
  return maisVelho;
};

module.exports = getOldestFromFirstSpecies;
