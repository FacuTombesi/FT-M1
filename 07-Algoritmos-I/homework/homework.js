'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  var res = [1];
  var divisor = 2;

  while (num > 1) {
    if (num % divisor === 0) {
      res.push(divisor);
      num = num / divisor;
    }
    else {
      divisor++;
    }
  }

  return res;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  var swap = true;
  // El swap se defince para entrar al while, lo que comprueba si hubo un cambio o no
  while (swap) {
    swap = false; // Cambia el swap a false para que no vuelva a entrar al while
    for (let i = 0; i < array.length-1; i++) {
      if (array[i] > array[i +1]) { 
        // Si el array está ordenado el swap queda en false, en caso contrario el swap cambia a true para que vuelva a entrar al while
        swap = true;
        var aux = array[i]; // Guarda el valor en la posición array[i] para no perderla antes de cambiarla
        array[i] = array[i + 1];  // Cambia el valor menor del array en i+1 por i
        array[i + 1] = aux; // Y le da el valor mayor al i+1
        // ALTERNATIVA para el cambio
        // [array[i], array[i + 1]] = [array[i + 1], array[i]];
        // Sin guardar aux hace el cambio de array[i] por array[i + 1]
      }
    }
  }

  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++) {
    var previous = i - 1;
    var aux = array[i];
    while (previous >= 0 && array[previous] > aux) {
      array[previous + 1] = array[previous];
      previous--;
    }
    array[previous + 1] = aux;
  }

  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length-1; i++) {
    var min = i;
    
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (i !== min) {
      var aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }

  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
