const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const animalsList = {};
    species.forEach((specie) => {
      animalsList[specie.name] = specie.residents.length;
    });
    return animalsList;
  }
  const animalTarget = species.find((specie) => specie.name === animal.specie);
  if (!animal.sex) {
    return animalTarget.residents.length;
  }
  let especifySex = 0;
  animalTarget.residents.forEach((sexAnimal) => {
    if (sexAnimal.sex === animal.sex) {
      especifySex += 1;
    }
  });
  return especifySex;
}

module.exports = countAnimals;
