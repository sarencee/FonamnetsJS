"use strict"



function operate(){
    
    let num1 = parseFloat(document.getElementById("inputNum1").value);
    let num2 = parseFloat(document.getElementById("inputNum2").value);
    let resultDiv = document.getElementById("result");
    
    let operadorRadio = document.querySelector('input[type="radio"]:checked');
    // console.log (operadorRadio)
    // console.log (operadorRadioValue)
    
    let message = " "
    
    let err1 = "Introdueix un número als dos camps."
    let err2 = "Selecciona una operació."
    
    if (isNaN(num1) || isNaN(num2)) return resultDiv.innerHTML = err1;
    if (!operadorRadio) return resultDiv.innerHTML = err2;

    
    let operadorRadioValue = parseInt(document.querySelector('input[type="radio"]:checked').value);

    switch (operadorRadioValue){
        case 1:  message = num1 + num2
        break
        case 2:  message = num1 - num2
        break
        case 3:  message = num1 * num2
        break
        case 4:  message = num2 !=0 ? num1 / num2 : Infinity
        break
    }
    resultDiv.innerHTML = `El resultat de l'operació és ${message}.`
}