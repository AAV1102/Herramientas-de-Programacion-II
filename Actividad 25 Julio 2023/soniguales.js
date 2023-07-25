function sonIguales(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      return false;
    }
     if (a.length !== b.length) {
      return false;
    }
     for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
     return true;
  }
   console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])); // true
  console.log(sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])); // false
  console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])); // false