"use strict"

function print(message, elementHTML){
elementHTML.innerHTML = message
}

function main(){

    const resultDiv = document.getElementById("result")
    const userNumInput = parseInt(document.getElementById("userNum").value)

    const err1 = "Introdueix un número."
    const err2 = "Introdueix un número mayor que 0."

    let message = ""

    if (isNaN(userNumInput))return print(err1, resultDiv)
    if (userNumInput <= 0) return print(err2, resultDiv)

    
      for (let i = 1; i <= userNumInput; i++){
        for (let j = 1; j <= i; j++){
            message += "*"
        }
        message += `<br>`
    }
        for (let i = userNumInput -1; i >= 0; i--){
        for (let j = i; j > 0; j--){
            message += "*"
        }
        message += "<br>"
    }

    print(message, resultDiv)
}