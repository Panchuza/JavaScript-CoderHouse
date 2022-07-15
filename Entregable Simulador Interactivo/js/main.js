//Ejercicio 1 Calcular costo total de productos y/o servicios seleccionados por el usuario.
/*
let row = parseFloat(prompt("Ingrese la cantidad de productos y/o servicios: "));
let total = 0;
const totalCost = (a,b) => a + b;
for(let i = 0; i < row; i++){
    let cost = parseFloat(prompt("Ingrese el costo del producto y/o servicio N°" + (i+1) + ": "));
    total = totalCost(cost, total);
}
alert("El costo total de los productos y/o servicios seleccionados es: " + total);
*/
//Fin Ejercicio 1

//Ejercicio 2 Calcular pagos en cuotas sobre un monto determinado.
/*
let cost = parseFloat(prompt("Ingrese el costo total: "));
let dues = parseFloat(prompt("Ingrese cantidad de cuotas (3/6/9/12): "));
const costPerDues = (a,b) => a/b;
let totalCosPerDues = costPerDues(cost,dues);
alert("El costo de cada cuota es: " +totalCosPerDues);
*/
//Fin Ejercicio 2

//Ejercicio 3 Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
/*
const tax = x => x * 0.21;
const sum = (a,b) => a + b;
const subtraction = (a,b) => a - b;
let cost = parseFloat(prompt("Ingrese el costo del producto: "));
let discount = parseFloat(prompt("Ingrese el descuento: "));
let totalCost = subtraction(sum(cost, tax(cost)), discount);
alert("El precio final es: " + totalCost);
*/
//Fin Ejercicio 3

//Ejercicio 4 Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.
/*
const averageTime = (a,b) => a/b;
let totalTimeInMin = 0;
let row = parseInt(prompt("Ingrese la cantidad de turnos registrados: "));
for(let i = 0; i < row; i++){
    let minutes = parseInt(prompt("Ingrese el tiempo en minutos del turno de la persona N°" + (i+1) + ": "));
    totalTimeInMin = totalTimeInMin + minutes;
}
alert("El promedio de tiempo de espera promedio en relación a la cantidad de turnos registrados es: " 
+ (totalAverageTime = averageTime(totalTimeInMin, row)) + " min");
*/
//Fin Ejercicio 4

//Ejercicio 5 Calcular edad promedio de personas registradas.
/*
const averageAge = (a,b) => a/b;
let totalAge = 0;
let row = parseInt(prompt("Ingrese la cantidad de personas registradas: "));
for(let i = 0; i < row; i++){
    let age = parseInt(prompt("Ingrese la edad de la persona N°" + (i+1) + ": "));
    totalAge = totalAge + age;
}
alert("El promedio de edads de las personas registradas es: " + (totalAverage = averageAge(totalAge, row)));
*/
//Fin Ejercicio 5

//Ejercicio 6 Calcular nota final de alumnos ingresados.
/*
const averageResult = (a,b) => a/b;
let totalResult = 0;
let row = parseInt(prompt("Ingrese la cantidad de alumnos ingresados: "));
for(let i = 0; i < row; i++){
    let examResult = parseFloat(prompt("Ingrese la nota del alumno N°" + (i+1) + ": "));
    totalResult = totalResult + examResult;
}
alert("El promedio de notas de los alumnos registrados es: " + (totalResult = averageResult(totalResult, row)));
*/
//Fin Ejercicio 6





