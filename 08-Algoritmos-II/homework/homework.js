'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  var newArray = [];

  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  var menores = [];
  var mayores = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      menores.push(array[i]);
    }
    else {
      mayores.push(array[i]);
    }
  }

  return newArray.concat(quickSort(menores), pivot, quickSort(mayores));
  // Concat junta arrays que recibe por parámetros en un solo array, aplicando antes recursividad en menores y mayores

  // OTRA SOLUCIÓN PARA EL RETURN
  // return quickSort(menores).concat(pivot).concat(quickSort(mayores));
}

/* ---------------------------------MergeSort--------------------------------- */

function merge(left, right) {
  var newArray = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) { // Si el array left en el valor leftIndex (es decir, 0 al principio) es menor al valor de rightIndex en el array right, pushea el valor de left[leftIndex] en un nuevo array
      newArray.push(left[leftIndex]);
      leftIndex++; // Si se cumple la condición se cumple, aumenta el index (sería la posición de i, siendo rightIndex la posición de j) para comparar el próximo elemento del array left
    }
    else { // Si no se cumple la condición de arriba, se hace el mismo pusheo pero con los valores de right
      newArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return newArray.concat(left.slice(leftIndex).concat(right.slice(rightIndex))); // .slice concatena al nuevo array los valores que no entraron al cortar el while, los cuales son los mayores de left y right
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  var middle = Math.floor(array.length / 2); // Define cuál es la mitad del array
  var left = array.slice(0, middle); // Manda a un array a la izquierda todos los elementos del array desde el índice 0 hasta el índice definido en middle
  var right = array.slice(middle); // Manda a la derecha todo desde middle hasta el final del array

  // OTRA ALTERNATIVA PARA MIDDLE, LEFT Y RIGHT creando otra función fuera de mergeSort()
  /*
  function split(array) {
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);

    return [left, right];
  }
  */

  if (array.length <= 1) {
    return array;
  }

  // OTRA ALTERNATIVA usando la alternativa de la función split()
  /*
  var div = split(array);
  var left = div[0];
  var right = div[1];
  */

  return merge(mergeSort(left), mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
