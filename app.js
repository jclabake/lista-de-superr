let listaDeSuper = [];
listaDeSuper[0] = "Leche";
listaDeSuper[1] = "Huevos";
listaDeSuper[2] = "Pan";

listaDeSuper.push("Arroz", "Galletitas");
listaDeSuper.unshift("Aceite", "Fideos");

console.log("Cantidad total actual: " + listaDeSuper.length);

let noHabia = listaDeSuper.pop();
console.log("Producto no encontrado: " + noHabia);

let comprado = listaDeSuper.shift();
console.log("Producto comprado: " + comprado);

console.log("Tamaño final de la lista: " + listaDeSuper.length);

console.log("--- Lista de compras final ---");
listaDeSuper.forEach(producto => console.log("- " + producto));