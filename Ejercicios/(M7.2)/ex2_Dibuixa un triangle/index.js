"use strict"

function print(message, elementHTML){
    elementHTML.innerHTML = message
}

function main(){

    const resultDiv = document.getElementById("result")
    const num = parseInt(document.getElementById("num").value)
    let message = ""

    for (let i = 1; i <= num; i++){
        for (let j = 1; j <= i; j++){
            message += "*"
        }
        message += `<br>`
    }
    
    print(message, resultDiv)
}