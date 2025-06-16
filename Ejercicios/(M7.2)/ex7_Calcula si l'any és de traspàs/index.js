"use strict"

function esBisiesto(num){
    if (num % 400 == 0) {
        return true
    } else if (num % 4 == 0 && num % 100 != 0){
        return true
    } else return false
}

function main(){

    const print = (message, elementHTML) => elementHTML.innerHTML = message

    const resultDiv = document.getElementById("result")
    const any = parseInt(document.getElementById("userNum").value)

    const err1 = "Introdueix un número."
    const err2 = "Introdueix un número superior o igual a 0."


    let message = ""

    if (isNaN(any)) return print(err1,resultDiv)
    if (any < 0) return print(err2,resultDiv)


    if (esBisiesto(any) == true) {
        message = `L'any ${any} és de trespás.`
    } else message = `L'any ${any} no és de trespás.`

    print(message, resultDiv)

}