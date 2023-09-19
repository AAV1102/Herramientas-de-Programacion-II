function numeromayor(matriz){
   
    let matrizeval = matriz.flat();
    let mayor = Math.max(...matrizeval)
    return mayor;
    
}

let med_matriz1 = [
[2,3,4,10],
[89,9,4,1],
[12,100,3,2], 
[0,8,3,87],

]

let med_matriz2 = [
    [1,120,5,87],
    [1,4,4,4],
    [0,0,67,3],
    [0,2,1200,90],

    ]

 console.log(numeromayor(med_matriz1));
 console.log(numeromayor(med_matriz2));


 





   