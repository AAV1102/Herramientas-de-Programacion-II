function adquirirElementoMatriz(element,matriz){
    let matrizaavArray = matriz.flat();
    let conteo = matrizaavArray.filter(num=>num==element).length;
    return conteo;
}

let matriz = [
    [1,2,3],
    [2,2,3],
    [9,8,6,3,3,3],
    [2,2,2,3,3,3]
    //resultado 8 (1)//
]

let nacimiento = [
    ["niño","aav","niña"],
    ["dvaa","med","niño"],
    ["aav","niño"]
    //resultado 3 (niño)//
]
console.log(adquirirElementoMatriz("niño",nacimiento))
console.log(adquirirElementoMatriz(3,matriz))