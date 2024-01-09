const listAlumnos= ['Jose', 'Maria', 'Ana', 'Leo'];
const listNotas= [8, 4, 3, 6];


const listAlumosReprobados = listAlumnos.filter((e,i)=> listNotas[i]< 6);
 


console.log(listAlumnos);
console.log(listAlumosReprobados);