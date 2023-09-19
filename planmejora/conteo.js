function conteo(inicialnumber){
    let numeros = [];
    for (let i = 1; i <= inicialnumber; i++){
        numeros.push(i);
    }
    let al_reves = numeros.reverse()
    return al_reves.forEach(n=>console.log(n))
}

console.log(conteo(30))