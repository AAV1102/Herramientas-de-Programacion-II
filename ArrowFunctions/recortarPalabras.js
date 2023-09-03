const recortarPalabras = (cantidadLetras,palabras)=>{
    let recorte = palabras.map(palabra=>{
        return palabra.slice(0,cantidadLetras)
    })
    console.log(recorte)
}

recortarPalabras(15,["hola","adios","carlos"])