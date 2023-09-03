function countPositive(numbers) {
    var contador = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i]>0) {
        contador++;
      }
    }
    console.log(contador);
}
countPositive([2,3,-1,-7,9,10])