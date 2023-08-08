// 1 forma

function suma(a,b){
    console.log(a + b)
}

suma(3,3)

//2 forma
function suma2(a,b){
    return a + b
}
const result = suma2(5,3)
console.log(result)

// 3 forma
const suma3 = (a,b)=> console.log(a+b)

suma3(8,4)