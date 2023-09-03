let palabra = prompt("escribe la palabra");
let letras = palabra.split("");

let nuevoArray = [];

for(letra of letras){
    if(letra === letra.toUpperCase()){
        nuevoArray.push(letra.toLowerCase())
    }else{
        nuevoArray.push(letra.toUpperCase())
    }
}
alert(nuevoArray.join(""))