"use strict"

function resultat(){

    let userAge = parseInt(document.getElementById("userAge").value);
    let userTitol = document.getElementById("userTitol").checked;
    let userAtur = document.getElementById("userAtur").checked;
    let resultDiv = document.getElementById("result");

    const majorEdat = 18;

    const err1 = "Introdueix un número.";
    const err2 = "No acceptem nadóns de menys de 12 mesos.";

    if (isNaN(userAge)) return resultDiv.innerHTML = err1;
    if (userAge <0) return resultDiv.innerHTML = err2;

    if (userAge >= majorEdat && userTitol || userAtur){
        resultDiv.innerHTML = "Tens beca! :)"
    } else {
        resultDiv.innerHTML = "No tens opció a beca :("
    }
    
}