"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  var total = 0;
  total++;
  if (this.left) total += this.left.size();
  if (this.right) total += this.right.size();
  return total;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) { // Se fija si el valor es mayor o menor para ir a derecha o izquierda
    if (this.left) { // Si hay algo, aplica recursividad
      this.left.insert(value);
    }
    else { // Si no hay nada crea el nuevo nodo
      this.left = new BinarySearchTree(value);
      return value; // Importante!! Retorna algo para cortar la ejecución
    }
  }

  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    }
    else {
      this.right = new BinarySearchTree(value);
      return value;
    }
  }

  return false;
}

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true;
  if (value < this.value && this.left) return this.left.contains(value); 
  if (value > this.value && this.right) return this.right.contains(value); 
  return false;
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  switch (order) {
    case "pre-order":
      cb(this.value);
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      break;

    case "post-order":
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      cb(this.value);
      break;
  
    default:
      this.left && this.left.depthFirstForEach(cb, order);
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb, order);
      break;
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array) {
  if (!array) var array = []; // Crea un array vacío en cado de no crearlo en el argumento

  cb(this.value);

  if (this.left) array.push(this.left);
  if (this.right) array.push(this.right);

  if (array.length > 0) array.shift().breadthFirstForEach(cb, array);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
