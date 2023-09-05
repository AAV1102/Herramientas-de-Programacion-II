function sumaArreglos(array1,array2){
    let suma = [];
    array1.forEach((n,indice)=>{
        suma.push(n+array2[indice])
    })
    return suma
}

let aav_array1 = [1,2,3,4]
let aav_array2 = [5,6,7,8]

console.log(sumaArreglos(aav_array1,aav_array2))