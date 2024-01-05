const listNotas =[7, 8, 6, 5, 8, 9, 9, 10, 11, 10];

let sumaNotas=0;

for(let nota of listNotas){
    sumaNotas += nota;
}

const valorMedio= sumaNotas / listNotas.length;
console.log(`El valor de la media Aritmetica usando for of es: ${valorMedio.toFixed(2)}`); 