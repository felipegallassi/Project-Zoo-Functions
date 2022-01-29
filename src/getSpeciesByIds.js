const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const especieEscolhida = species.filter((animal) => ids.some((id) => animal.id === id));
  return especieEscolhida;
}

module.exports = getSpeciesByIds;
