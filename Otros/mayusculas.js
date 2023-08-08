function convertirMayusculas(texto){
    return texto.toUpperCase()
}

const mensaje = 'hola, que haces?'
const mensajeMayuscula = convertirMayusculas(mensaje)
console.log(mensajeMayuscula)

// 2 forma

function convertirMayusculas2(texto){
    console.log( texto.toUpperCase())
}

convertirMayusculas2("hola, que haces?")

let ar =[1,2,3]

console.log(ar.reverse())
