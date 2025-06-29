"use strict"

const print = (message, elementHTML) => elementHTML.innerHTML = message

function catchValues(){

   return{
    userString : document.getElementById("userString").value,   
    resultDiv : document.getElementById("result"),
   } 

}

function literals(){

    return{
        message : "",
        err1 : "Introdueix un text.",
    }
}

const lowerCase = (str)  =>  str === str.toLowerCase()

const upperCase = (str)  =>  str === str.toUpperCase()

function main(){

    const {userString, resultDiv} = catchValues()
    let {message, err1} = literals()

    if (!isNaN(userString) || !userString) return print(err1, resultDiv)

    if (lowerCase(userString)) {
        message = `La frase está tota en minúscules.`
    } else if (upperCase(userString)) {
        message = `La frase está tota en mayúscules.`
    } else message = `La frase utilitza mayúscules y minúscules.`

    print(message, resultDiv)

}