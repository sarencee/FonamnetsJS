"use strict"

function calcular(){

    let resultDiv = document.getElementById("result");
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    const arrayNum = []
    console.log(arrayNum)

    if (num1 < num2){

        for (let i = num1; i <= num2; i++){
            arrayNum.push(i)  
        }
    } else {
        for (let i = num2; i <= num1; i++){
            arrayNum.push(i)
        }

    }

    let suma = 0

    for (let i = 0; i < arrayNum.length; i++){

        suma += arrayNum[i]
    }

     console.log(suma)
}       