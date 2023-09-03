let positivos = [3, -4, 9, 7, -12, -1]
let numero = 0

for (let i = 0; i <= positivos.length; i++){
    if(positivos[i] > 0){
    numero = numero + 1    
}
}

console.log(numero)