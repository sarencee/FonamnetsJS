"use strict"

function print(message, elementHTML){
    elementHTML.innerHTML = message
}

function main(){

    const resultDiv = document.getElementById("result")
    const num = parseInt(document.getElementById("num").value)

    let message = ""

    for (let i = 0; i < num; i++){
      
        message += "*<br>"   
        resultDiv.innerHTML += `${message}<br>`
    }

    // print(message, resultDiv)
}