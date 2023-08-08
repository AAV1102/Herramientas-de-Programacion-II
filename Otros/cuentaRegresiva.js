function cuentaRegresiva(initial){
    let numeros = [];
    for(let i = 0; i<=initial; i++){
        numeros.push(i)
    }
    return numeros.reverse()
}

console.log(cuentaRegresiva(4))