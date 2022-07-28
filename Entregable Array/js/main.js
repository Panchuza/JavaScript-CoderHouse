class Materia {
    
    constructor(nombreAlumno, nota1, nota2, nota3, promedio){
        this.nombreAlumno = nombreAlumno.toLowerCase();
        this.nota1 = parseFloat(nota1);
        this.nota2 = parseFloat(nota2);
        this.nota3 = parseFloat(nota3);
        this.promedio = (this.nota1+this.nota2+this.nota3)/3;
    }

}
const alumnos = [];
(alumnos.push(new Materia(nombre = prompt("Ingrese nombre alumno: " + alumnos.length), 
nota1 = prompt("Ingrese nota 1: "), nota2 = prompt("Ingrese nota 2: "), nota3 = prompt("Ingrese nota 3: "), Materia.promedio))); 
(alumnos.push(new Materia(nombre = prompt("Ingrese nombre alumno: " + alumnos.length), 
nota1 = prompt("Ingrese nota 1: "), nota2 = prompt("Ingrese nota 2: "), nota3 = prompt("Ingrese nota 3: "), Materia.promedio)));
(alumnos.push(new Materia(nombre = prompt("Ingrese nombre alumno: " + alumnos.length), 
nota1 = prompt("Ingrese nota 1: "), nota2 = prompt("Ingrese nota 2: "), nota3 = prompt("Ingrese nota 3: "), Materia.promedio)));
for(const materia of alumnos){
        alert("Nombre alumno : " + materia.nombreAlumno + " | nota 1: " + materia.nota1 + " | nota 2: " 
        + materia.nota2 + " | nota 3: " + materia.nota3 + " | el promedio es: " + materia.promedio);
}

