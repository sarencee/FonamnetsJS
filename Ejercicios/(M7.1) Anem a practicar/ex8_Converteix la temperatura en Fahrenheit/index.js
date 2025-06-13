"use strict"

// Crea un programa on l’usuari/ària introdueixi una temperatura
//  en °C i es mostri per pantalla la conversió en ° Fahrenheit.

// K = 32;

// Fórmula
// (0 °C × 9 / 5) + K = 32 °F

function print(message, elemtentHTML){
    elemtentHTML.innerHTML = message
}

function convertir(temp){
    const K = 32
    return ((temp * 9 / 5) + K).toFixed(2)
}

function validate(num){
    return isNaN(num) 
}

function main(){

    const resultDiv = document.getElementById("result")
    const tempInput = parseFloat(document.getElementById("temp").value).toFixed(2)

    const err1 = "Introdueix un número."

    let message = ""
    let resultat = convertir(tempInput)

    message = `${tempInput}°C  en Fahrenheit és: ${resultat}°F.`

    if (validate(tempInput)) return print(err1, resultDiv)

    print(message, resultDiv)


} 