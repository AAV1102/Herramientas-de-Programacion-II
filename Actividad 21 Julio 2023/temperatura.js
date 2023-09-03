let temperatura = [25, 30, 28, 32, 29, 27];
mayor = 0

for(let i = 0; i <= temperatura.length; i++){
    if (temperatura[i] > mayor){
        mayor = temperatura[i]
    }
}
 console.log(mayor)