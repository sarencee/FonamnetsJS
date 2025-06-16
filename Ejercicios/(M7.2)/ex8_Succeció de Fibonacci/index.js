"use strict"

const print = (message, elementHTML) => elementHTML.innerHTML = message

function fibonacci(length){

    let arrFibonacci = [0,1]
    
    if (length < 1) return arrFibonacci[0]
    
    for (let i = 2; i < length; i++){


        let next = arrFibonacci[i - 1] + arrFibonacci[i - 2];

        arrFibonacci.push(next)
    }

 return arrFibonacci
}



function main(){

    const resultDiv = document.getElementById("result")
    const numInput = parseInt(document.getElementById("num").value)

    const err1 = "Introdueix un número."

    if (isNaN(numInput)) return print (err1, resultDiv)

    let message = fibonacci(numInput)

    print(message,resultDiv)

}