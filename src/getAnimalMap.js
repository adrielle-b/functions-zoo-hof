const data = require('../data/zoo_data');

const filterLocation = (local) => {
  const especies = data.species.filter((animal) =>
    animal.location === local).map(({ name }) => name);
  return especies;
};

const especiesLocations = () => {
  const objetoLocation = {
    NE: filterLocation('NE'),
    NW: filterLocation('NW'),
    SE: filterLocation('SE'),
    SW: filterLocation('SW'),
  };
  return objetoLocation;
};

const relatorioNames = (sorted, sex) => data.species
  .reduce((novoValor, { location, residents, name }) => {
    const novoObj = { ...novoValor };
    if (!novoObj[location]) {
      novoObj[location] = [];
    }
    let animaisDaEspecie = residents;
    if (sex) {
      animaisDaEspecie = animaisDaEspecie.filter((animal) => animal.sex === sex);
    }
    animaisDaEspecie = animaisDaEspecie.map((animal) => animal.name);
    if (sorted === true) {
      animaisDaEspecie.sort();
    }
    novoObj[location].push({ [name]: animaisDaEspecie });
    return novoObj;
  }, {});

const getAnimalMap = (options) => {
  if (!options) {
    return especiesLocations();
  }
  if (!options.includeNames) {
    return especiesLocations();
  }
  return relatorioNames(options.sorted, options.sex);
};

module.exports = getAnimalMap;
