const listNotasYALumnos = [["Alvaro", "Valeria", "Alba", "Julia"],
                            [8, 9, 10, 8]];


const nombreAlunmo= "Valeria";

if (listNotasYALumnos[0].includes(nombreAlunmo)) {
    console.log('Alumno encontrado');
    const posicionAlumno = listNotasYALumnos[0].indexOf(nombreAlunmo);
    const notaAlumno = listNotasYALumnos[1][posicionAlumno];

    console.log (`La nota final del alumno ${nombreAlunmo} es ${notaAlumno}`)

} else {
    console.log('Alumno no encontrado');

}