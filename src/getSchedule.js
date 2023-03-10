const data = require('../data/zoo_data');

const diasDoAnimal = (nameAnimal) => {
  const disponivel = data.species.find((animal) => animal.name === nameAnimal).availability;
  return disponivel;
};

const formatOfficeHour = ({ open, close }) => `Open from ${open}am until ${close}pm`;
const todasInformacoes = () => {
  const relatorio = Object.entries(data.hours).reduce((novoValor, [dia, horario]) => {
    const { species } = data;
    const officeHour = horario.open === 0 ? 'CLOSED' : formatOfficeHour(horario);
    const exhibition = officeHour === 'CLOSED' ? 'The zoo will be closed!' : species
      .filter(({ availability }) => availability.includes(dia)).map(({ name }) => name);
    return {
      ...novoValor,
      [dia]: { officeHour, exhibition },
    };
  }, {});
  return relatorio;
};

const horariosEanimaisDoDia = (dia) => {
  const relatorio = todasInformacoes();
  const informacoesDoDia = Object.entries(relatorio)
    .find((diaDaSemana) => diaDaSemana.includes(dia));
  const [nomeDoDia, infoDoDia] = informacoesDoDia;
  const { exhibition, officeHour } = infoDoDia;
  return { [nomeDoDia]: { exhibition, officeHour } };
};

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget || typeof scheduleTarget !== 'string') {
    return todasInformacoes();
  }
  const animal = data.species.find((especie) => especie.name === scheduleTarget);
  if (animal) {
    return diasDoAnimal(scheduleTarget);
  }
  const day = data.hours[scheduleTarget];
  if (day) {
    return horariosEanimaisDoDia(scheduleTarget);
  }
  return todasInformacoes();
};

module.exports = getSchedule;
