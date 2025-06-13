"use strict"

function print(message, elementHTML){
    elementHTML.innerHTML = message
}

function validate(num){
    if (isNaN(num)) return true
}


function main(){

    const resultDiv = document.getElementById("result");
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const messageNegatiu = "Un dels dos números és negatiu."
    const messagePositiu = "Cap dels dos números es negatiu."

    const err1 = "Introdueix un número."

    if (validate(num1) || validate(num2)) return print(err1, resultDiv)

    if (num1 < 0 || num2 < 0) {
        print(messageNegatiu, resultDiv)
    } else print(messagePositiu, resultDiv)

}
