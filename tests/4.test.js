const removerDuplicados = require("../4");

test("Función que elimine valores duplicados", () => {
  const randomArr = [
    1,
    1,
    1,
    3,
    2,
    5,
    6,
    4,
    4,
    7,
    9,
    6,
    6,
    6,
    6,
    6,
    6,
    10,
    11,
    11,
    11,
    10,
  ];
  const expected = ["1", "2", "3", "4", "5", "6", "7", "9", "10", "11"];
  expect(removerDuplicados(randomArr)).toBeTruthy();
});
