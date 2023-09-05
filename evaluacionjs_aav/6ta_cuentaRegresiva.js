function cuentaRegresiva(numberInicial){
    let numeros = [];
    for (let i = 1; i <= numberInicial; i++){
        numeros.push(i);
    }
    let al_revez = numeros.reverse()
    return al_revez.forEach(n=>console.log(n))
}

console.log(cuentaRegresiva(12))