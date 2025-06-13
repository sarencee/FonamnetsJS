"use strict"

function print(message, elementHTML){
    elementHTML.innerHTML = message
}

function validate(num){
    if (isNaN(num)) return true
}


function main(){

    const resultDiv = document.getElementById("result");
    const num = parseFloat(document.getElementById("num").value);

    let message = ""

    const err1 = "Introdueix un número."

    if (validate(num)) return print(message = err1, resultDiv)

    if (num % 2 == 0){
        message = `El número ${num} és parell.`
    } else message = `El número ${num} és imparell.`

    print(message, resultDiv)
}