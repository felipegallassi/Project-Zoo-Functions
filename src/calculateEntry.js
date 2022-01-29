const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const count = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) count.child += 1;
    if (entrant.age >= 18 && entrant.age < 50) count.adult += 1;
    if (entrant.age >= 50) count.senior += 1;
  });

  return count;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const tickets = Object.entries(countEntrants(entrants));
  return tickets.reduce((price, ticket) => price + data.prices[ticket[0]] * ticket[1], 0);
}

module.exports = { calculateEntry, countEntrants };
