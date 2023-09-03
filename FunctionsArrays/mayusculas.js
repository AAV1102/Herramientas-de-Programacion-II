function convertirMayusculas(texto){
    return texto.toUpperCase()
}

const mensaje = 'hola, como estas?'
const mensajeMayuscula = convertirMayusculas(mensaje)
console.log(mensajeMayuscula)

// 2 forma

function convertirMayusculas2(texto){
    console.log( texto.toUpperCase())
}

convertirMayusculas2("hola, como estas?")

let ar =[1,2,3]

console.log(ar.reverse())
