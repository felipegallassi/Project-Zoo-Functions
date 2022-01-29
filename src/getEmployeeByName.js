const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    const nada = {};
    return nada;
  }
  const verificaColab = employees.filter((colabAtual) =>
    colabAtual.firstName === employeeName || colabAtual.lastName === employeeName)[0];
  return verificaColab;
}
getEmployeeByName();

module.exports = getEmployeeByName;
