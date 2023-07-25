function capitalizarPalabras(string){
    let array = string.split(" ");
    let array2 = [];
    for (let i = 0; i < array.length; i++) {
        array2.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
      return array2.join(" ");
}
console.log(capitalizarPalabras('Esto es un título'))