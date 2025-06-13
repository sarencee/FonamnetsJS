"use strict"

function draw(){

    const resultDiv = document.getElementById("result");
    const numberInput = parseInt(document.getElementById("numberInput").value);
    const base = Math.floor(numberInput / 2) + 1;
    let lineaBase = ""

    const err1 = "Introdueix un número."
    const err2 = "Introdueix un número més gran que 1."
    
    resultDiv.innerHTML = ""

    if (isNaN(numberInput)) return resultDiv.innerHTML = err1
    if(numberInput <= 1) return resultDiv.innerHTML = err2

    for (let i = 0; i < numberInput; i++){
        resultDiv.innerHTML += "*<br>"
        console.log("*");
    }


    for (let i = 0; i < base; i++){
        lineaBase += " *"
    }
    resultDiv.innerHTML += lineaBase
}