import "./styles.css";

let result: Number = 0; //Se declara e inicializa la variable "result".
let num: Number = document.getElementById("num"); //Se declara la variable "num".
let limit: Number = document.getElementById("limit"); //Se declara la variable "number".

//const numImput: Number = document.getElementById("num"); //Toma lo que se ingresa en la primer caja y lo guarda en la variable "numImput".
//const numLimit: Number = document.getElementById("limit"); //Toma lo que se ingresa en la segunda caja y lo guarda en la variable "numLimit".
const btnCalc: Number = document.getElementById("btnCalc"); //Toma el boton y lo pone en la variable "btnCalc".

btnCalc.addEventListener("click", (e) => {
  //Escucha el Evento de hacer "Click" en el boton y le asigna funciones.
  //e.preventDefault(); //Limpia la pagina luego de su ejecuccion. Poniendo un para metro en la linea de arriba.
  num = num.value; // Lo ingresado en la Primer caja, lo convierte a tipo numero y lo guarda en la variable "num".
  limit = limit.value; // Lo ingresado en la Segunda caja, lo convierte a tipo numero y lo guarda en la variable "limit".
  for (let i: Number = 1; i <= limit; i++) {
    // Inicio de ciclo for: (i comienza con valor 1; fin: cuando sea igual o menor al valor de "limit"; en cada iteracion a i se le suma 1)
    result = i * num; // algoritmo del programa, que genera la tabla.
    //console.log(result);
    console.log(`${num} x ${i} = ${result}`); // en cada iteracion imprime en consola los valores.
  }
});
