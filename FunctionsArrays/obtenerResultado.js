function obtenerResultado(jugadorA,jugadorB,puntajesA,puntajesB){
    const resultadoA = puntajesA.reduce((accumulator, currentNumber) => {
        return accumulator + currentNumber
      }, 0)
    
    const resultadoB = puntajesB.reduce((accumulator, currentNumber) => {
        return accumulator + currentNumber
      }, 0)

      if(resultadoA>resultadoB){
        console.log(`el ganador es ${jugadorA} con ${resultadoA}`)
      }else if(resultadoB>resultadoA){
        console.log(`el ganador es ${jugadorB} con ${resultadoB}`)
      }else{
        console.log("Empateee")
      }
}


obtenerResultado("Anderson","Danna",[2,2,4,5],[1,1,1,2])