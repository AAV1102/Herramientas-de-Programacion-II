function suma(array1,array2){
    let suma = [];
    array1.forEach((n,inicial)=>{
        suma.push(n+array2[inicial])
    })
    return suma
}

let med_array1 = [1,2,9,3]
let med_array2 = [4,6,5,22]

console.log(suma(med_array1,med_array2))