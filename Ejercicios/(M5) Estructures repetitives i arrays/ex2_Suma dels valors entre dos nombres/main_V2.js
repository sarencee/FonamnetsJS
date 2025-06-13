"use strict"

function addNumbers(){

    const resultDiv = document.getElementById("result");
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let message = `La suma de `

    const err1 = "Introdueix un número."

    if (isNaN(num1) || isNaN(num2)) return resultDiv.innerHTML = err1

    if (num1 > num2){
        
        let aux = num1;
        num1 = num2;
        num2 = aux;

    }

    let suma = 0;

    for (let i = num1; i <= num2; i++){

        suma += i
        message += i == num1 ? `${i}` : ` + ${i}`;
    }

     message += ` es ${suma}.`;
     resultDiv.innerHTML = message;
}