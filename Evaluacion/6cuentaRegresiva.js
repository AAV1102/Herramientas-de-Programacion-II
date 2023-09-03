function cuentaRegresiva(numInicial){
    let numeros = [];
    for (let i = 1; i <= numInicial; i++){
        numeros.push(i);
    }
    let alrevez = numeros.reverse()
    return alrevez.forEach(n=>console.log(n))
}

console.log(cuentaRegresiva(12))