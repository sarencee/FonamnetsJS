"use strict"


function esPrimer(num) {
    let esPrimer = true;
    let i = 2;
    while (esPrimer && i < num) {
        if (num % i == 0) {
            esPrimer = false;
        }
        i++;
    }
    return esPrimer;
}

function main(){

    const resultDiv = document.getElementById("result")
    let primerCheck = false;

    
    let num = 0
    
    do {
        num = parseInt(prompt("Introdueix un número primer:"))
        
        if (num > 1) {
            primerCheck = esPrimer(num)
        } else primerCheck = false
    } while (!primerCheck)
        
    let message = `Exacte, el número ${num} és primer!`

    resultDiv.innerHTML = message
}