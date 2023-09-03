function mayoresIgualesA6 (array){
    const filtro = array.filter(num=>num >= 6)
    return filtro
}

let array = [1,2,3,0,12,6,7,8,-3];
let array2 = [-1,-2,1,2,3,4,5,6,7]

console.log(mayoresIgualesA6(array2))
console.log(mayoresIgualesA6(array))
