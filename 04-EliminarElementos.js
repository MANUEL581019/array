const notas =[8, 7, 9, 6, 9];

let media = (notas[0] + notas[1]+notas[2]+notas[3]+notas[4])/notas.length;
console.log(media);
//console.log(notas);
//Quita el ultimo elemento 
//notas.pop();
//console.log(notas);

// Quitar elementos al inicio 
notas.shift();
//console.log(notas);
media = (notas[0] + notas[1]+notas[2]+notas[3])/notas.length;
console.log(media);


