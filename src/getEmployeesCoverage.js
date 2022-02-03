const data = require('../data/zoo_data');

const employ = (newObject) => {
  const responsible = newObject.responsibleFor;
  const responsibleMap = responsible
    .map((element) => data.species.find((acc) => acc.id === element).name);
  const region = responsible
    .map((element) => data.species.find((acc) => acc.id === element).location);
  const newEmploye = {
    id: newObject.id,
    fullName: `${newObject.firstName} ${newObject.lastName}`,
    species: responsibleMap,
    locations: region,
  };
  return newEmploye;
};

function getEmployeesCoverage(employee) {
  const employeAll = data.employees.map((element) => employ(element));
  if (employee === undefined) return employeAll;
  if (employeAll.some((e) => e.id === employee.id) === false && employee.id !== undefined) {
    throw new Error('Informações inválidas');
  }
  const employeDiff = employeAll.find((element) => {
    if (element.fullName.indexOf(employee.name) >= 0) return element.fullName;
    return element.id === employee.id;
  });
  return employeDiff;
}

module.exports = getEmployeesCoverage;
