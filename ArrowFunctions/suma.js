const suma = (a,b)=> a + b;
console.log(suma(2,2))

const esPar = num => num % 2 === 0;
console.log(esPar(2))

const numeros = [1,2,3,4];
const cuadrados = numeros.map(num=>num**2)
console.log(numeros)
console.log(cuadrados)

const numeros2 = [2,5,7,6,8,10]
const mayores = numeros2.filter(num=>num>5)
console.log(numeros2)
console.log(mayores)
