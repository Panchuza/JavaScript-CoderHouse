//Ejercicio 1 Pedir número mediante prompt y sumarle otro número en cada 
//repetición,realizando una salida por cada resultado.

/*
let i = 1;
const number2 = 2;
let number = parseFloat(prompt("Ingrese un numero"));
let result = number;

while(i <= 3){
result += number2;
if(i != 3){
    alert("La suma del numero ingresado: " + number + " mas la constante " 
+ number2 + " es: " + result)
} else {
    alert("La suma final es: " +result)
}
i++;
}
*/

//Fin Ejercicio 1

//Ejercicio 2 Pedir un texto mediante prompt, concatenar un valor en cada
//repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

/*
 let i = 1;
 let answer = "";
 let text = prompt("Ingrese texto: ");
 let flag = false;

 while(answer != "ESC"){
     alert(text + " #" + i);
     answer = prompt("¿Esta seguro que desea seguir? (Si para seguir / ESC para terminar)");
     i++;
 }

 */
//Fin Ejercicio 2

//Ejercicio 3 Pedir un número por prompt, 
//repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

let numberRep = prompt("Ingrese la cantidad de veces que quiere repetir '¡Hola!' : ");

for (let i = 1; i <= numberRep; i++) {
    alert("¡Hola! numero: #" + i);
}


//Fin Ejercicio 3

