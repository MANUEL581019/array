const listNombres=['Jose','Arturo', 'Maria', 'Valeria','Alan'];

//Funcion anonima como arreglo
listNombres.forEach(function(nombre){
    console.log(nombre);
})
console.log('********');
//Funcion arrow o funcion de flecha

listNombres.forEach((nombre)=> {
    console.log(nombre);
});
console.log('--------');
// Una version mas resumida
listNombres.forEach((nombre)=> console.log(nombre));
console.log('********');
//Declaracion de funcion 
function imprimeNombres(nombre){
console.log(nombre);
}
listNombres.forEach(imprimeNombres);


