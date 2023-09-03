function obtenerElementoMatriz(element,matriz){
    let matrizaArray = matriz.flat();
    let conteo = matrizaArray.filter(num=>num==element).length;
    return conteo;
}

let matriz = [
    [1,2,3],
    [2,2,3],
    [9,8,6,3,3,3],
    [2,2,2,3,3,3]
]

let prueba = [
    ["carro","j","carro"],
    ["televisor","cel","carro"],
    ["p","carro"]
]
console.log(obtenerElementoMatriz("carro",prueba))
console.log(obtenerElementoMatriz(3,matriz))