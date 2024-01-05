const listNotasYALumnos = [["Alvaro", "Valeria", "Alba", "Julia"],
                            [8, 9, 10, 8],
                            [],
                            []];

    
const [listAlumnos, listNotas, ...resto] = listNotasYALumnos;
console.log(listAlumnos);
console.log(listNotas);
console.log(resto);
const nombreAlunmo= "Valeria";



if (listAlumnos.includes(nombreAlunmo)) {
    console.log('Alumno encontrado');
    const posicionAlumno = listAlumnos.indexOf(nombreAlunmo);
    const notaAlumno = listNotas[posicionAlumno];

    console.log (`La nota final del alumno ${nombreAlunmo} es ${notaAlumno}`)

} else {
    console.log('Alumno no encontrado');

}
