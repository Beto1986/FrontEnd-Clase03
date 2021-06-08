// Ejercicio 0 
/*Solicitar al usuario su nombre y mostrarlo por consola. Luego Mostrar un alert que salude diciendo Hola y el nombre de la persona. Luego solicitar el apellido y que salude por consola con el nombre completo (Ej: Hola Florencia Andres).*/
let nombre = prompt("Ingrese su nombre");
console.log(nombre);
alert("Hola " + nombre);
let apellido = prompt("Ingrese su apellido");
console.log("Hola " + nombre + " " + apellido);

// Ejercicio 1
/* Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. */
let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));
let suma = num1 + num2;
console.log(suma);

// Ejercicio 2
/* Solicitar al usuario la edad que cumple o cumplió este año y calcular en qué año nació y mostrar un mensaje por consola (Ej: Usted nació en 1974) */
let edad = parseInt(prompt("Ingrese su edad"));
const anioactual = 2021;
let fechanacimiento = anioactual - edad;
console.log("Usted nació en " + fechanacimiento);

// Ejercicio 3
/* Mostrar al usuario su balance de cuenta (Numero asignado por nosotros). Consultar cuánto dinero desea retirar y mostrar el nuevo balance.*/
let balanceasignado = 10000;
alert("Su balance de cuenta es: $" + balanceasignado);
let retirodinero = parseInt(prompt("Cuánto dinero desea retirar?"));
let nuevobalance = balanceasignado - retirodinero;
alert("Su nuevo balance es: $" + nuevobalance);

// Ejercicio 4
/* Solicitar al usuario 3 notas, calcular el promedio y mostrarlo por consola. */
let nota1 = parseInt(prompt("Ingrese la primer nota"));
let nota2 = parseInt(prompt("Ingrese la segunda nota"));
let nota3 = parseInt(prompt("Ingrese la tercer nota"));
let promedio = (nota1 + nota2 + nota3) / 3;
console.log(promedio);

// Ejercicio 5
/* Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centimetros y pulgadas. Mostrar por consola los tres resultados.*/
let medidametro = parseInt(prompt("Ingrese medida en metros"));
// Defino las constantes equivalentes a metros.
const medidacentimetro = 100;
const medidapies = 3.281;
const medidapulgadas = 39.37;
// Convierto las medidas
let centimetro = medidametro * medidacentimetro;
let pies = medidametro * medidapies;
let pulgadas = medidametro * medidapulgadas;
// Muestro las medidas convertidas
console.log("Pies: " + pies);
console.log("Centímetros: " + centimetro);
console.log("Pulgadas: " + pulgadas);

/* Solicitar al usuario dos números y mostrar el resultado de la suma. Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.*/
// Ejercicio 6
let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
alert(num1 + num2);
let num3 = parseInt(prompt("Ingrese el tercer numero"));
let resultado = (num3 * (num1 + num2));
alert("El resultado es: " + resultado);

// Ejercicio 7
/* Armar un conversor de minutos a segundos. Solicitar al usuario un número de minutos y mostrar por alert la cantidad de segundos a la que equivale.*/
let minutos = parseInt(prompt("Ingrese minutos"));
let segundosequivalentes = minutos * 60;
alert(minutos + " minutos equivalen a " + segundosequivalentes + " segundos");

//Ejercicio 8
/* Solicitar al usuario la medida de la base y de la altura de un rectángulo y devolver el área.*/
let base = parseInt(prompt("Ingrese la base del rectángulo"));
let altura = parseInt(prompt("Ingrese la altura del rectángulo"));
let area = base * altura;
alert("El área del rectangulo es: " + area);

// Ejercicio 9
/* Solicitar al usuario la medida de la base y de la altura de un triángulo equilatero y devolver el área*/
let base = parseInt(prompt("Ingrese la base del triángulo"));
let altura = parseInt(prompt("Ingrese la altura del triángulo"));
let area = (base * altura) / 2;
alert("El área del triángulo es: " + area);

//Ejercicio 10
/* Solicitar al usuario un monto y un número de descuento. Mostrar al usuario cuánto es el precio final con el descuento aplicado.*/
let monto = parseInt(prompt("Ingrese monto"));
let descuento = parseInt(prompt("Ingrese descuento"));
let preciocondescuento = (monto * (descuento / 100));
alert(monto - preciocondescuento);

//Ejercicio 11
/* Solicitar al usuario su nombre y la edad que cumple o cumplió en 2021, y mostrar un mensaje con alert diciendo "Hola (nombre) usted nació en el año (año)"*/
let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
const anioactual = 2021;
let anionacimiento = anioactual - edad;
alert("Hola " + nombre + " usted nació en el año: " + anionacimiento);

//Ejercicio 12
/* Crear un conversor de Celsius a Farenheit. Solicitar al usuario su nombre y una temperatura y mostrar por consola su equivalente en Farenheit junto con un mensaje que incluya ambos datos.*/
// (0 °C × 9/5) + 32 = 32 °F;
let nombre = prompt("Ingrese su nombre");
let temperaturacelsius = prompt("Ingrese temperatura Celsius");
let equivalentefahrenheit = (temperaturacelsius * 9 / 5) + 32;
console.log(nombre + " , la temperatura equivalante es: " + equivalentefahrenheit + " °F");

//Ejercicio 13
/* Realizar el mismo ejercicio que el anterior pero al revés, de Farenheit a Celsius. */
// (0 °F − 32) × 5/9 = -17.78 °C
let nombre = prompt("Ingrese su nombre");
let temperaturafahreneit = prompt("Ingrese temperatura Fahrenheit");
let equivalentecelsius = ((temperaturafahreneit - 32) * 5 / 9);
console.log(nombre + " , la temperatura equivalante es: " + equivalentecelsius + " °C");

// Ejercicio 14
/* Solicitar al usuario un número y almacenarlo en una variable. Sumarle 5 , multiplicar el resultado por 10 y sacar el resto de su división por 3. Mostrar el resultado sin comas.*/
let num = parseInt(prompt("Ingrese un numero"));
let sumomultipliconum = (num + 5) * 10;
let restoresultante = (sumomultipliconum % 3);
alert("El resto es: " + restoresultante);

// ---------------- BONUS ---------------- //

// Ejercicio 0
/* Solicitar dos números y mostrar la suma de sus cifras. (Ejemplo: 15 y 29, mostrar 1529).*/
let num1 = prompt("Ingrese el primer numero");
let num2 = prompt("Ingrese el segundo numero");
let sumacifras = num1 + num2;
alert(sumacifras);

// Ejercicio 1
/* Crear un conversor de años a segundos. Solicitar al usuario una cantidad de días y mostrar su equivalente en segundos por consola o alert, a elección. (Pueden probar también con números con coma :) 2,5 años por ejemplo)*/ //// --> Para mí se refiere de un conversor de días a segundos y no años a segundos. 
let cantdias = parseFloat(prompt("Ingrese cantidad de días"));
let segundosequivalentes = cantdias * 86400;
console.log(segundosequivalentes);

// Ejercicio 2
/*Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. Calcular el tiempo estimado en llegar a destino en minutos.  A tener en cuenta: la velocidad se calcula en metros sobre segundos!*/
let cantkm = parseInt(prompt("Ingrese cantidad de km"));
let velocidadkmh = parseInt(prompt("Ingrese velocidad km/h"));
// Convertir velocidad (km/h --> mtr/s) --> (lo paso a metros y convierto de hora a segundos).
let velocidadmetroseg = (velocidadkmh * 1000) / 3600;
// Convertir km a metros
let distanciametro = (cantkm * 1000);
// Tiempo = Distancia / Velocidad
let tiempoestimadominutos = (distanciametro / velocidadmetroseg) / 60;
alert(tiempoestimadominutos);

// Ejercicio 3
/* Realizar una calculadora de sueldo neto. Se solicita ingresar el sueldo bruto y se descuenta: Obra social 3%, jubilación 11%, Ley 19032 3%. Mostrar el monto de cada una de las deducciones y el monto final. No contempla impuesto a las ganancias ni sindicatos.
ej: Sueldo bruto: $70.000
    Deducciones:
    Obra social: $2100
    Ley 19032: $2100
   Jubilación: $7700
   Neto a pagar: $58100*/
let sueldobruto = parseInt(prompt("Ingrese sueldo bruto"));
let descuentoosocial = ((sueldobruto * 3) / 100);
let descuentojubilacion = ((sueldobruto * 11) / 100);
let descuentoley = ((sueldobruto * 3) / 100);
let sueldoneto = (sueldobruto - descuentoosocial - descuentojubilacion - descuentoley);
alert("Sueldo Bruto: $" + sueldobruto + "\n" +
    "Monto con descuento de obra social: $" + descuentoosocial + "\n" +
    "Monto con descuento de jubilación: $" + descuentojubilacion + "\n" +
    "Monto con descuento de ley 19032: $" + descuentoley + "\n" +
    "Sueldo neto: $" + sueldoneto);