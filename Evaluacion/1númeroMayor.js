function obtenerNumeroMayor(matriz){
    // lo que hace el flat() es convertir la matriz en un array
    let matrizAArray = matriz.flat();
    let mayor = Math.max(...matrizAArray)
    return mayor;
}


let matriz1 = [
    [2,3,4,10],
    [89,9,4,1],
    [12,100,3,2],
    [0,8,3,87]
]


let matriz2 = [
    [1,120,5,87],
    [1,4,4,4],
    [0,0,67,3],
    [0,2,1200,90]
]

console.log(obtenerNumeroMayor(matriz2))
console.log(obtenerNumeroMayor(matriz1))
