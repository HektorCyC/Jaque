const nPlusM = require('../2');

test('Función que reciba 2 enteros no negativos n y m y obtenga el resultado de n+(n+1)+(n+2)+...+m', () => {
  expect(nPlusM(3, 6)).toBe(18);
});