function availableRooms(schedules) {
  // Inicializamos el contador de salones a ocupar.
  let rooms = 0;
  // Ordenamos el array
  schedules.sort()
  // Iteramos el arreglo para recorrer cada posición y evaluar la fecha de inicio y fin.
  for (let i = 0; i < schedules.length; i++) {
    if (schedules[i + 1]) {
      let startDate = schedules[i][0];
      let endDate = schedules[i][1];
      let startDateSecond = schedules[i + 1][0];
      let endDateSecond = schedules[i + 1][1];
      // Buscamos coincidencias y evaluamos fecha de inicio y termino.
      if (startDate <= endDateSecond && endDate >= startDateSecond) {
        // Si hay coincidencias se suma un salon al contador.
        rooms += 1;
      }
    }
  }
  return rooms;
}

let schedules = [
  ["11:00:00", "14:00:00"],
  ["12:00:00", "15:00:00"],
  ["14:30:00", "16:00:00"],
];
console.log(availableRooms(schedules));

module.exports = availableRooms;