function repetir(valor,cantidad){
    const resultado = [];

    for(let i = 1; i<=cantidad; i++){
        resultado.push(valor)
    }
    return resultado
}

console.log(repetir("mon",5))