//Daniela Rodríguez Jiménez
"use strict";
var daniela = document.getElementById("daniela"),
    salida = document.getElementById("salidaRaiz");
daniela.addEventListener("submit", calculaRaiz, false);

function calculaRaiz(){
  salida.value = ""
 try {
  var d = daniela["numero"].value;
  valida(!isNaN(d), "Valor invalido, ingresa un número");

  valida(d >= 0, "El valor no puede ser un número negativo");
  const resultado = procesa(d);



} catch (e) {
  console.log(e.message);
}

}

function procesa(d) {
  salida.value = Math.sqrt(d);
}

function valida(cond, mensaje) {
  if (!cond) {
   throw new Error(salida.value = mensaje);
  }
}
