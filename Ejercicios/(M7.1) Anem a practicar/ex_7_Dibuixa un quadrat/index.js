"use strict"

function print(message, elementHTML){
    elementHTML.innerHTML = message
}

function main(){

    const resultDiv = document.getElementById("result");
    const charInput = document.getElementById("character").value
    const numInput = parseInt(document.getElementById("num").value)

    let message = ""

    const err1 = "Introdueix un caràcter."
    const err2 = "Introdueix un número."

    if (charInput == "") return print(err1, resultDiv)
    if (isNaN(numInput) || numInput < 0) return print(err2, resultDiv)


    for (let i = 0; i < numInput; i++){
        for (let i = 1; i < numInput; i++) message += `${charInput}`
        message += `${charInput}<br>`
        
    }

    print(message, resultDiv)


}