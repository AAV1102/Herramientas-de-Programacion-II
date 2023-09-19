function mayores (array){
    const filtro = array.filter(numero=>numero >= 6)
    return filtro
}

let med_array = [1,2,3,0,12,6,7,8,-8];
let med_array2 = [-6,-0,1,2,3,4,5,6,7] 

console.log(mayores(med_array)) 
console.log(mayores(med_array2)) 

