const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const qtdVisitantes = entrants.reduce((novoValor, { age }) => {
    const novoObjeto = { ...novoValor };
    if (age < 18) {
      novoObjeto.child += 1;
    } else if (age >= 18 && age < 50) {
      novoObjeto.adult += 1;
    } else {
      novoObjeto.senior += 1;
    }
    return novoObjeto;
  }, { child: 0, adult: 0, senior: 0 });
  return qtdVisitantes;
};

const calculateEntry = (entrants) => {
  if (!entrants) {
    return 0;
  }
  const visitantes = countEntrants(entrants);
  const precos = data.prices;
  const precosTotais = Object.values(visitantes).map((qtdVisitantes, indice) => {
    if (indice === 0) {
      return qtdVisitantes * precos.child;
    }
    if (indice === 1) {
      return qtdVisitantes * precos.adult;
    }
    return qtdVisitantes * precos.senior;
  });
  const precoTotal = precosTotais.reduce((novoValor, valorAtual) => novoValor + valorAtual, 0);
  return Number(precoTotal.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
