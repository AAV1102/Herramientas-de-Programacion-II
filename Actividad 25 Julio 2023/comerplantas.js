function comer(plantas) {
    let plantas_sobrevivientes = '';
    const indice_prohibido = plantas.indexOf('🚫');
    const indice_conejo = plantas.indexOf('🐰');
  
    if (indice_conejo > -1 && indice_prohibido > -1) {
      for (let i = 0; i < plantas.length; i++) {
        if (i < indice_conejo || i > indice_prohibido) {
          plantas_sobrevivientes += plantas[i];
        }
      }
    }
  
    return plantas_sobrevivientes;
  }
  
  console.log(comer('🐰🥕🥬🥕🚫')); // ''
  console.log(comer('🥕🥬🐰🥕🥕🥕🚫')); // '🥕🥬'
  console.log(comer('🐰🥕🥬🥕🚫🥕')); // '🥕'
  console.log(comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷')); // '🌱🥕🌱🌷'  
  