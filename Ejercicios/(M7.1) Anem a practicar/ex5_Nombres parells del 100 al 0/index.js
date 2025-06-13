"use strict"

function print(message, elementHTML){
    elementHTML.innerHTML = message
}

function main(){

    const resultDiv = document.getElementById("result");

    const arrNum = []

    let message = ""

    for (let i = 0; i <= 100; i++){
        let num = i
        if (num % 2 == 0) arrNum.push(num)
    }
    
    let arrNumReversed = (arrNum.toReversed())
    message = `Els números parells entre 0 i 100 són: ${arrNumReversed}.`
    print(message, resultDiv)

}