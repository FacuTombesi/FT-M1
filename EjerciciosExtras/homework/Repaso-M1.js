const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
    var total = 0;

    for (const num of array) { // El "for (... of...)" itera un array sin pasarle el iterador
        if (Array.isArray(num)) { // Devuelve true si "num" (o el nombre que le de) es un array
            total += countArray(num); // Suma de forma recursiva los valores del array dentro del array
        }
        else { // De lo contrario suma el valor del array recibido por parámetro
            total += num;
        }
    }

    return total;
}


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:
    var total = 0;

    for (const prop in obj) { // "for (... in ...)" itera en un objeto buscando prop (o como lo llamemos) en el objeto que le pasemos, obj en este caso. En este caso quiero buscar las propiedad dentro del objeto
        total++; // Cada vez que entra en el for, suma 1 al total
        if (typeof obj[prop] === "object" && !Array.isArray(obj[prop])) { // Comprueba si las propiedades del objeto son objetos y no son arrays. En el caso de ser true, lo suma al total
            total += countProps(obj[prop]);
        }
    }

    return total;
}


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    var current = this.head;
    var total = 0;

    while (current) {
        if (isNaN(Number(current.value))) {
            current.value = "Kiricocho";
            total++;
        }

        current = current.next;
    }

    return total;
}


// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    var newQueue = new Queue();

    while (queueOne.size() || queueTwo.size()) { // Se usa || porque si son de diferente tamaño tiene que seguir recorriendo hasta terminar las dos
        if (queueOne.size()) { // Si el queueOne tiene algo, le saco un valor y lo guardo en la nueva queue
            newQueue.enqueue(queueOne.dequeue());
        }
        if (queueTwo.size()) {
            newQueue.enqueue(queueTwo.dequeue());
        }
    }

    return newQueue;
}


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
    return function(num) {
        return num * multiplier;
    }
}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
    var total = 0;
    total += this.value; // Cada vez que se ejecute la función se sumará el valor del nodo en el que está

    if (this.left) {
        total += this.left.sum(); // Se mueve al nodo de la izquierda (si existe) y realiza la recursión
    }

    if (this.right) {
        total += this.right.sum();
    }

    return total;

    // OTRA ALTERNATIVA
    /*
    if (!this.left && !this.right) return this.value; // Si no hay left y right, devuelve el valor actual
    if (this.left && !this.right) return this.value + this.left.sum(); // Si hay left pero no right, devuelve el valor actual + la recursión de left
    if (!this.left && this.right) return this.value + this.right.sum(); // Si hay right pero no left, devuelve el valor actual + la recursión de right
    if (this.left && this.right) return this.value + this.left.sum() + this.right.sum(); // Si hay ambos, devuelve el valor actual + la recursividad de left y right
    */
}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}