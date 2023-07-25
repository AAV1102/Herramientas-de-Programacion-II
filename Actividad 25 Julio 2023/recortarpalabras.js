function recortar(cantidadLetras, palabras) {
  let palabrasRecortadas = [];

  palabras.forEach(palabra => {
    let palabraRecortada = palabra.slice(0, cantidadLetras);
    palabrasRecortadas.push(palabraRecortada);
  });

  return palabrasRecortadas;
}
console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america']));
console.log(recortar(1, ['algoritmo', 'bug', 'compilador']));