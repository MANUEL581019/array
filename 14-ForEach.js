const listNotas =[7, 8, 6, 5, 8, 9, 9, 10, 9, 10];

let sumaNotas=0;

listNotas.forEach(function(nota, posicon) {
    sumaNotas += nota;
    console.log(posicon);
});

const valorMedio= sumaNotas / listNotas.length;
console.log(`El valor de la media Aritmetica usando for each es: ${valorMedio.toFixed(2)}`); 

