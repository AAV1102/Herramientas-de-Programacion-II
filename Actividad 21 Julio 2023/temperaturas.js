let temperaturas =[25, 30, 28, 32, 29, 27];
let mayor = temperaturas[0];
for (let index = 0; index < temperaturas.length; index++) {
    if (temperaturas[index] > mayor) {
        mayor = temperaturas[index];
    }
}
console.log(mayor);