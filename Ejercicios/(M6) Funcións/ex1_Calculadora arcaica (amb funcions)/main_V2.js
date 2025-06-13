"use strict"

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
        return b == 0 ?  Infinity : a / b
    }

    function catchValues(){

        const resultDiv = document.getElementById("result");
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const operacio = parseInt(document.getElementById("operacio").value);

        return [resultDiv, num1, num2, operacio]     
    }
    
    function validateNum(a){
        return isNaN(a)
    }

    function print(a, b){
        a.innerHTML = b
    }

    const err1 = "Selecciona una operació."
    const err2 = "Introdueix un número als dos camps."
    const err3 = "No es por dividir 0."

    function main(){
        
    
        const arrValues = catchValues()

        if (validateNum(arrValues[1]) || validateNum(arrValues[2])) return print(arrValues[0], err2);



        switch (arrValues[3]){

            case 0: print(arrValues[0], err1) 
                break    
            case 1: print(arrValues[0], sumar(arrValues[1], arrValues[2])) 
                break 
            case 2: print(arrValues[0], restar(arrValues[1], arrValues[2]))
                break
            case 3: print(arrValues[0], multiplicar(arrValues[1], arrValues[2])) 
                break
            case 4: print(arrValues[0], arrValues[2] != 0 ? dividir(arrValues[1], arrValues[2]) : err3)  
                break 
            default: print(arrValues[0], err1) 

        }   

      
}

