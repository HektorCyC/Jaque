const availableRooms = require("../6");

test("Función que encuentre número de salones", () => {
    let array = [
        ["11:00:00", "14:00:00"],
        ["12:00:00", "15:00:00"],
        ["14:30:00", "16:00:00"],
      ];
  expect(availableRooms(array)).toBe(2);
});
