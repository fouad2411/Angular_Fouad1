/*const alumnos = [
  { nombre: "Lola", nota: 9 },
  { nombre: "Lolo", nota: 5 },
];
alumnos.push({ nombre: "Petra", nota: 10 }, { nombre: "Paco", nota: 5 });
console.log("vectort completo:" + alumnos);
console.log("longitud:" + alumnos.length);
//3. pop() : elimina el último elemento del array y lo puede devolver
let vector1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("vector completo" + vector1);

let ultimo = vector1.pop();

console.log("elemento del vector eliminado" + ultimo);
console.log("vector sin el ultimo" + vector1);
*/
//4. unshift(item1,item2...): añade uno o más elementos al comienzo del array
//esto te lo añade al principio
// const arboles = [
//   { nombre: "encina", altura: 10 },
//   { nombre: "chopo", altura: 30 },
// ];
// arboles.unshift({ nombre: "pino", altura: 25 });
// console.log(arboles);
//5. shift() : elimina el primer elemento del array y lo retorna
// let vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primero = vector.shift();
// console.log(vector);

// const vector1 = [1, 2, 3];
// const vector2 = [4, 5, 6];
// const vector3 = [7, 8, 9];
// const vectorTotal = vector1.concat(vector2, vector3);
// 7. slice ( inicio, fin) : devuelve una subcadena desde la posición de inicio hasta fin (no se incluye y éste es opcional), Si solo aparece inicio se entiende que es hasta el final.
// const vector1 = [1, 2, 3, 4, 5];
// const vector2 = vector1.slice(0, 3);
// console.log(vector2);
// const vector = [10, 8, 7, 6, 5, 4];
// vector.sort((a, b) => a - b);
// console.log(vector);
// console.log(vector.sort().reverse());
const fruta = [
  { nombre: "naranja", precio: 4, stock: 6300 },
  { nombre: "manzanas", precio: 2, stock: 8000 },
  { nombre: "kiwi", precio: 3, stock: 10000 },
];
const listadoPorPrecio = fruta.sort((a, b) => a.precio - b.precio);
console.log(listadoPorPrecio);
const listadoPorStock = fruta.sort((a, b) => a.stock - b.stock);
console.log(listadoPorPrecio);
