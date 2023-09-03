
function obtenerFilaMasLarga(matriz){
    let filaLarga = matriz[0]

    for(let i = 0; i < matriz.length; i++){
        if(matriz[i].length>filaLarga.length){
            filaLarga = matriz[i]
        }
    }
    return filaLarga
}

let matriz1 = [
    [2,3,4,10,1,1],
    [89,9,4,1,1],
    [12,100,3,2,1,0,0,0],
    [0,8,3,87,2]
]

console.log(obtenerFilaMasLarga(matriz1))