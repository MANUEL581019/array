const listA=[9, 8, 7, 9,9];
const listB=[5, 5, 9, 8, 5, 9, 8];
const listC=[8, 8, 9, 9, 8, 2];


const sumnaSeccion = (list) => {
  return list.reduce((prev, act) => prev +act,0);

}
const valorMedia = (sumnaSeccion(listA)+sumnaSeccion(listB)+sumnaSeccion(listC))
                    /(listA.length+listB.length+listC.length);

console.log(`El valor de la media de las 3 secciones es: ${valorMedia.toFixed(2)}`);

