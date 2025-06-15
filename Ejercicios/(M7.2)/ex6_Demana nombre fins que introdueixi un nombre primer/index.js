"use strict"

// L’usuari/ària ha d’introduir números fins que
//  introdueixi un nombre primer. 

// En el moment que l’usuari/ària introdueixi un 
// nombre primer, el programa ha de treure per pantalla 
// el següent missatge: “Exacte, el número “x” és primer!”


function iniciarComprovacio() {
    var esPrimer = false;
    var num = prompt("Escoge un número: ");
    if (num > 1) {
        esPrimer = ep(num);
    }
    return esPrimer
}


function esPrimer(num) {
    let esPrimer = true;
    let divisor = 2;
    while (esPrimer && divisor < num) {
        if (num % divisor == 0) {
            esPrimer = false;
        }
        divisor++;
    }
    return esPrimer;
}

function main(){

    const resultDiv = document.getElementById("result")
    const userNum = prompt("Introdueix un número").value
  
    do{
        iniciarComprovacio(userNum)
        
    } while (!iniciarComprovacio)

        
}