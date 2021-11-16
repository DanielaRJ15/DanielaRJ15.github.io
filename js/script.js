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
firebase.initializeApp({
  apiKey: "AIzaSyAzYapL1IAog4GPQmUFqE2MJrzhmvoz02Q",
  authDomain: "pwautentificacion-d70db.firebaseapp.com",
  projectId: "pwautentificacion-d70db",
  storageBucket: "pwautentificacion-d70db.appspot.com",
  messagingSenderId: "71529552535",
  appId: "1:71529552535:web:e8a1916e7ff2a9ce5367d2",
  measurementId: "G-JRZDPY4FWF"
    });
