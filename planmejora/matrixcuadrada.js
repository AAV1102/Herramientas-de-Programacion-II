function matrizCuadrada(matriz){
    let i=0;
    for(let i = 0; i<matriz.length; i++){
        if(matriz[i].length !== matriz.length){
            return false
        }
    }
    return true
}

let matrizFalse = [
    [2,3,4,10,1],
    [89,9,4,1,1],
    [12,100,3,2,1],
    [0,8,3,87,2],
    [0,8,3,87]
]

let matrizTrue = [
    [2,3,4,10],
    [89,9,4,1],
    [12,100,3,2],
    [0,8,3,87]
]

console.log(matrizCuadrada(matrizFalse))
console.log(matrizCuadrada(matrizTrue))