const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica a quantidade de elefantes, seus nomes, a média de suas idades e sua localização.', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('avarageAge')).toEqual(null);
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Verifica a população dos elefantes, dias da semana que pode visitar e se o parâmentro existe.', () => {
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants()).toBeUndefined();
  });

  it('Verifica as informações de cada elefante e a mensagem se o parâmetro for diferente de string.', () => {
    expect(handlerElephants('residents')).toEqual([
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ]);
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica a id da espécie elefante e se outro parâmetro retorna null.', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('sex')).toEqual(null);
    expect(handlerElephants('age')).toEqual(null);
  });
});
