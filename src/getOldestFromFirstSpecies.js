const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const specieResidents = data.species.find((specie) => specie.id === specieId).residents;
  const oldestAnimal = specieResidents.reduce((acc, animal) => {
    if (acc.age > animal.age) return acc;
    return animal;
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
