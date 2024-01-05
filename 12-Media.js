const listNotas =[7, 8, 6, 5, 8, 9, 9, 10, 11, 10];

let sumaNotas=0;


for (let i = 0; i < listNotas.length; i++){
     sumaNotas+= listNotas[i];
}
console.log(sumaNotas);

const mediaAritmetica= sumaNotas/listNotas.length;
console.log(`El valor de la media aritmetica de la lista es ${mediaAritmetica.toFixed(2)}`)
