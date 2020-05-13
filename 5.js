function balancearParentesis(string) {
  // Creamos variable acumulador para los resultados
  let acumulador = [];
  // Iteramos el string para encontrar coincidencias
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "(" || string[i] == "{" || string[i] == "[") {
      // Si se encuentra coincidencia de parentesis abierto se agrega al acumulador
      acumulador.push(string[i]);
    } else if (string[i] == ")" || string[i] == "}" || string[i] == "]") {
      // Si se encuentra coincidencia de parentesis cerrado se borra el ultimo registro del array.
      let last = acumulador.pop();
      // Si el array esta vacio retorna un "false", no cumple con el balance.
      if (last == undefined) {
        return false;
      }
    }
  }
  // Se realiza el ultimo check antes de retornar el resultado.
  if (acumulador.length !== 0) return false;
  return true;
}

let string = "({{((((((((((((((((((((])))))))))))))))))))))}}";
console.log(balancearParentesis(string));

module.exports = balancearParentesis;
