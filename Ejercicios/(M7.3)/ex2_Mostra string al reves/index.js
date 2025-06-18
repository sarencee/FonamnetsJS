"use string"

const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value

function catchValues(){

   return{
    inputString :document.getElementById("string").value,   
    resultDiv : document.getElementById("result")
   } 

}

function reverseString(array){

    let arrayReverse = []

    for (let i = 0; i < array.length; i++ ){

        arrayReverse.unshift(array[i])
    }

    return arrayReverse

}

function literals(){

    return{
        message : "",
        err1 : "Introdueix un text.",
    }
}


function reverse(){

    const {inputString, resultDiv} = catchValues()
    let {message, err1} = literals()

    if (validate(inputString)) return print(err1, resultDiv)

    const arrInputString = inputString.split("");

    const arrInputStringReversed = reverseString(arrInputString).join("")

    print (message = `El text ${inputString} del revés és: ${arrInputStringReversed}.`, resultDiv)

}