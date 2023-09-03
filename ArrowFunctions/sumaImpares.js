let suma = 0
const sumaImpares = limite =>{
    for(let i = 1; i<= limite; i+= 2){
        suma = suma + i
     }
     return suma
}

console.log(sumaImpares(3))