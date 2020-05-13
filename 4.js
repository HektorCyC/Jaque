function removerDuplicados(array) {
  // Creamos una variable acumulador para las coincidencias.
  let unicos = {};
  // Iteramos el array que se recibe
  array.forEach((i) => {
    // Validamos si la posición ya existe en el objeto "unicos"
    if (!unicos[i]) {
      // Si pasa la validación agregamos la llave al objeto
      unicos[i] = true;
    }
  });
  // Regresa la llave del objeto "unicos" en un array nuevo.
  return Object.keys(unicos);
}
const arr = [1, 1, 1, 3, 2, 5, 6, 4, 4, 7, 9, 6, 6, 6, 6, 6, 6,10,11,11,11,10];
console.log(removerDuplicados(arr));

module.exports = removerDuplicados;