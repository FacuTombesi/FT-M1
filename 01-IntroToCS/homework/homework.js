'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  
  var decimal = 0;

  for(var i = 0; i < num.length; i++) {
    decimal += num[i] * 2 ** (num.length - 1 - i);
    // decimal += num[i] * Math.pow(2, (num.length - 1 - i));
  }

  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca

  var binario = "";
   
  while(num > 0) {
     binario = (num % 2) + binario;
     // Se suma al revés porque para pasar a binario se debe leer de abajo para arriba
     // Esto solo sirve para agragar caracteres a un string y no si fuese suma de números
     num = (num - (num % 2)) / 2;
     // num = Math.floor(num / 2); --> Math.floor redondea para abajo para que no de con coma
  }

  return binario;
}

   

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}