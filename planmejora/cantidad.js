function cantidad(element,matriz){
    let matrizArray = matriz.flat();
    let conteo = matrizArray.filter(numero=>numero==element).length;
    return conteo;
}

let matriz1 = [
    [1,2,11],
    [2,2,11],
    [9,8,6,11,11,11],
    [2,2,2,11,11,11,11],
    
]

let med = [
    ["dsds","aadasdsv","cars"],
    ["dvaa","med","cars"],

]

console.log(cantidad(11,matriz1))
console.log(cantidad("dsds",med))
