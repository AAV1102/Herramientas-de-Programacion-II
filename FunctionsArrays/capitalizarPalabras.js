function capitalizarLetras(string){
   const separarPalabras = string.split(" ");

   let palabrasPrimeraMayuscula = separarPalabras.map(p=> p.charAt(0).toUpperCase()+ p.slice(1))

   console.log(palabrasPrimeraMayuscula.join(" "))
}

capitalizarLetras("Esto es una palabra capitalizada")
