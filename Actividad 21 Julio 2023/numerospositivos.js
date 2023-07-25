const temperaturas = [25, 30, 28, 32, 29, 27];
 let mayorTemperatura = 0;
 
 for (let i = 0; i < temperaturas.length; i++) {
  if (temperaturas[i] > mayorTemperatura) {
    mayorTemperatura = temperaturas[i];
   }
 }