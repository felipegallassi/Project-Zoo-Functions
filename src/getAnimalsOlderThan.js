const data = require('../data/zoo_data');
const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const AnimalSelecionado = species.find((specie) => specie.name === animal);
  return AnimalSelecionado.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
