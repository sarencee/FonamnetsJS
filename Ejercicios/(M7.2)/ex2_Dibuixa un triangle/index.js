"use strict"

function print(message, elementHTML){
    elementHTML.innerHTML = message
}

function main(){

    const resultDiv = document.getElementById("result")
    const num = parseInt(document.getElementById("num").value)
    const asterisc = "*"
    let message = ""

    for (let i = 1; i <= num; i++){
        let numeroChar = i
        message += `${asterisc}<br>`
    }
    
    print(message, resultDiv)
}