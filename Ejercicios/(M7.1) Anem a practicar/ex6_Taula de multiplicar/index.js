"use strict"

function print(message, elementHTML){
    elementHTML.innerHTML = message
}

function main(){

    const resultDiv = document.getElementById("result")
    const num = parseInt(document.getElementById("num").value)
    let message = ""

    const err1 = "Introdueix un número."
    const err2 = "Introdueix un número de l'1 al 10."

    if (isNaN(num)) return print(message = err1, resultDiv)
    if (num < 1 || num > 10) return print(message = err2, resultDiv)
    for (let i = 1; i <= 10; i++){
        let multiplicacio = num * i
        message += `${num} x ${i} = ${multiplicacio}<br>`
        
    }
    resultDiv.innerHTML = message
}