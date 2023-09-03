function obtenerIndice(valor,array){
   const indice = array.findIndex(numero=> numero === valor)
   return indice
}


console.log(obtenerIndice(5,[1,4,3,5,5]))


////
function obtenerIndices(valor, array) {
    const indices = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === valor) {
        indices.push(i);
      }
    }
    return indices;
  }
  
  console.log(obtenerIndices(5, [1, 4, 3, 5, 5]));


  /////
  function mostrarIndices(valor, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === valor) {
        console.log(i);
      }
    }
  }
  
  mostrarIndices(5, [1, 4, 3, 5, 5]);