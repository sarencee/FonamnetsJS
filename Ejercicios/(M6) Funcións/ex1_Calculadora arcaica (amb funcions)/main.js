"use strict"

// Calculadora arcaica. El programa demana a l’usuari/ària que
//  introdueixi dos números i l’operació que desitja realitzar. 

// Cada operació (suma, resta, multiplicació, divisió i mòdul) 
// estarà programada en una funció diferent.




    function sumar(a, b){
        return a + b
    }

    function restar(a, b){
        return a - b
    }

    function multiplicar(a, b){
        return a * b
    }

    function dividir(a, b){
        return a / b
    }
    
    function calcular(){
        
        const resultDiv = document.getElementById("result");
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const operacio = parseFloat(document.getElementById("operacio").value);

        const err1 = "Selecciona una operació."
        const err2 = "No es por dividir 0."
        const err3 = "Introdueix un número als dos camps."

        if (isNaN(num1) || isNaN(num2)) return resultDiv.innerHTML = err3
        

        switch (operacio){

            case 0: resultDiv.innerHTML = err1
            break    
            case 1: resultDiv.innerHTML = sumar(num1, num2)
            break 
            case 2: resultDiv.innerHTML = restar(num1, num2)
            break
            case 3: resultDiv.innerHTML = multiplicar(num1, num2)
            break
            case 4: resultDiv.innerHTML = num1 != 0 ? dividir(num1, num2) : err2
            break 
            default: resultDiv.innerHTML = err1

        }   

      
}

