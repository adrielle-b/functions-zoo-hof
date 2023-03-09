const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const animaisById = data.species.filter((animal) => ids.includes(animal.id));
  return animaisById;
};

module.exports = getSpeciesByIds;
