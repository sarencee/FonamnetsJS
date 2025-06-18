"use strict"

const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value

function catchValues(){

   return{
    resultDiv : document.getElementById("result")
   } 

}

const literals = {

        mess1: "Ben fet!",
        err1: "Introdueix una paraula.",
        err2:"Aquesta no és la paraula correcta, torna-ho a intentar!",
}

function comprovar(){

    const {resultDiv} = catchValues()


    const javascript = "javascript"

    let text = prompt("Introdueix la paraula 'javascript'")

    while (text != javascript || validate(text)){
    text = prompt("Introdueix la paraula 'javascript'")
    
    }

    print(literals.mess1, resultDiv)

}