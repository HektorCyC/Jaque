const balancearParentesis = require('../5');

test('Función que responda si los parentesis estan balanceados', () => {
  const input = '((((()))))[]{}'
  expect(balancearParentesis(input)).toBe(true);
});