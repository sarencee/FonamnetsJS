"use strict"

function print(message, elementHTML){
elementHTML.innerHTML = message
}

function main(){

    const resultDiv = document.getElementById("result")
    const numLinies = parseInt(document.getElementById("numLinies").value)

    const err1 = "Introdueix un número."
    const err2 = "Introdueix un número mayor que 0."

    let message = ""

    if (isNaN(numLinies))return print(err1, resultDiv)
    if (numLinies <= 0) return print(err2, resultDiv)

    for (let i = numLinies; i >= 0; i--){
        for (let j = i; j > 0; j--){
            message += "*"
        }
        message += "<br>"
    }

    print(message, resultDiv)
}