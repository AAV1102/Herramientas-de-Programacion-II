let resultado = document.getElementById("resultado")

let palabra = prompt("escribe una palabra");

let vocales = palabra.split("");

let contador = 0;

for(vocal of vocales){
    if(vocal == "a" || vocal == "e" || vocal == "i" || vocal == "o" || vocal == "u"){
        contador = contador + 1
    }
}


resultado.innerHTML = `la palabra ${palabra} tiene ${contador} vocales`


///// otra forma

let texto = "holii"
let conteo = 0;

for(let i =0; i<texto.length; i++){
    let letra = texto[i].toLowerCase();
    if(letra ==="a"|| letra === "e"||letra ==="i"||letra === "o" || letra === "u"){
        conteo = conteo + 1;
    }
}

console.log(conteo)