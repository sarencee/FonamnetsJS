"use strict"

// Realitzar un programa on l’usuari/ària introdueix un
//  número i el programa crida a un mètode que retorna el 
// factorial del número introduït.

// El factorial d'un nombre n (enter, no negatiu) 
// és el producte de tots els nombres enters positius inferiors o iguals a n.

function print(message, elementHTML){
elementHTML.innerHTML = message
}

function factorial(n){
    let result = 1
    for (let i = 2; i <= n; i++){
        result *= i
    }
    return result
}

function main(){

    const resultDiv = document.getElementById("result")
    const num = parseInt(document.getElementById("num").value)

    const err1 = "Introdueix un número."
    const err2 = "Introdueix un major que 0."

    if (isNaN(num)) return print(err1, resultDiv)
    if (num <= 0) return print(err2, resultDiv)



    let resultFactorial = factorial(num)
    let message = `El factorial de ${num} és ${resultFactorial}.`



    print(message,resultDiv)

}