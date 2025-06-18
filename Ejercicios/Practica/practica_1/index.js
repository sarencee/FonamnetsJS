"use strict"

// 🔹 Exercici 1 – Validació amb bucle while
// Demana a l’usuari que introdueixi la paraula "javascript".

// Si no l’escriu exactament així (sense majúscules), has de tornar a demanar-la.

// Quan finalment l’escriu bé, mostra "Ben fet!".

// Pista: Fes servir prompt() i un while.

/* TODO
HTML
    input
    boto
    result
JS
    catch values
    message
    validacio
    print
*/

const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value

function catchValues(){

   return{
    text : document.getElementById("text").value,   
    resultDiv : document.getElementById("result")
   } 

}

const literals = {

        mess1: "Ben fet!",
        err1: "Introdueix una paraula.",
        err2:"Aquesta no és la paraula correcta, torna-ho a intentar!",
}

function comprovar(){

    const {text, resultDiv} = catchValues()

    console.log(literals.err1)

    const javascript = "javascript"

    if(validate(text)) return print(literals.err1, resultDiv)

    if (text != javascript){
        return print(literals.err2, resultDiv)
    } else {
        return print(literals.mess1, resultDiv)
    }

}