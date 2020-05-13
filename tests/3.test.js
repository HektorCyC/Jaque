const kNesimo = require("../3");

test("Función que encuentre el k-ésimo elemento más grande", () => {
  let array = [7, 2, 5, 9, 8, 3];
  let k = 2;
  expect(kNesimo(array, 2)).toBe(8);
});
