function recortar(cantidadLetras,palabras){
    let recorte = palabras.map(palabra=>{
        return palabra.slice(0,cantidadLetras)
    })
    console.log(recorte)
}

recortar(2,["hola"])