function nPlusM(n, m) {
  // Revisamos la integridad de los datos recibidos.
  if (n <= 0 || m <= 0) return "Error en los datos ingresados";
  // Inicializamos el contador
  let counter = 0;
  // Iteramos n y sumamos 1 cada iteración.
  for (n; n < m; n++) {
    counter += n;
  }
  return counter + m;
}
let n = 3;
let m = 6;
console.log(nPlusM(n, m));

module.exports = nPlusM;

