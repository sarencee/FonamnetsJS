"use strict"

// L’usuari/ària ha d’introduir una frase i 
// el programa ha de dir si la frase és un palíndrom.

/* TODO
HTML
    input
    button
    result
JS
    main
    reverse function
     cathc sritng reverse string compare string to original string
    cathc values
    validate
*/

const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value

function catchValues(){

   return{
    userString : document.getElementById("userString").value,   
    resultDiv : document.getElementById("result")
   } 

}

function reverseArray(array){

    let arrayReverse = []

    for (let i = 0; i < array.length; i++ ){

        arrayReverse.unshift(array[i])
    }

    return arrayReverse

}

function compareArray(arr1, arr2){

    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] != arr2[i]) {
            return false
        } else return true    
    } 

}

function literals(){

    return{
        mess1 : "",
        mess2 : "",
        err1 : "Introdueix un text.",
    }
}

function comprovarPalindrom(){

    const {userString, resultDiv} = catchValues()
    let {mess1, mess2, err1} = literals()

    if (validate(userString) || !isNaN(userString)) return print(err1, resultDiv)

    let userStringLower = userString.toLowerCase()

    const arrUserString = userStringLower.split("")

    const arrUserStringReversed = reverseArray(arrUserString)
    
    if (compareArray(arrUserString, arrUserStringReversed) == true){

        print(mess1 = `${userString} és un paíndrom.`, resultDiv)

    } else print(mess2 = `"${userString}" NO és un paíndrom.`, resultDiv)




}

