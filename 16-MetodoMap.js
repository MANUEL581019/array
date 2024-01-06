const notas =[10, 9, 8, 8, 9];

const notasActualizadas = notas.map((nota)  => (nota/2)<3 ? 3 :(nota/2));

console.log(notasActualizadas);
