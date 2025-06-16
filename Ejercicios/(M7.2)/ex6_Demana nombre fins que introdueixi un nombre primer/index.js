"use strict"

// L’usuari/ària ha d’introduir números fins que
//  introdueixi un nombre primer. 

// En el moment que l’usuari/ària introdueixi un 
// nombre primer, el programa ha de treure per pantalla 
// el següent missatge: “Exacte, el número “x” és primer!”

// function () {
//     var p = false;
//     var n = prompt("Escoge un número: ");
//     if (n > 1) {
//         p = ep(n);
//     }
//     alert(p);
// }


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