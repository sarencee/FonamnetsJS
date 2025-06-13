"use strict"


function print(message, elementHTML){
    elementHTML.innerHTML = message
}

function validate(num){
    if (num < 0 || isNaN(num)) return true
}


function main(){

    const numNotes = prompt("Cuantes notes vols introduir?");
    const resultDiv = document.getElementById("result")
    const arrNotes = []
    let message = ""

    const err1 = "Introdueix un número de notes válid."
    const err2 = "introdueix una nota válida."

   if (validate(numNotes)) return print(err1,resultDiv);

    console.log(validate(numNotes))

    for (let i = 0; i < numNotes; i++){
        let nota = prompt("Introdueix una nota");
        while (validate(nota)){
            alert(err2)
            nota = prompt("Introdueix una nota")
        }
        arrNotes.push(nota)
    }

    let suma = 0

    for (let i = 0; i < arrNotes.length; i++){
        suma += parseFloat(arrNotes[i])
    }

    let mitjana = suma / arrNotes.length

    if (mitjana < 5){
        message = "La nota mitjana de la classe està suspesa. Els/les alumnes haurien de preguntar els seus dubtes i treballar més."
    } else if (mitjana < 7){
        message = "La nota mitjana de la classe és bona, però els/les alumnes haurien de millorar el treball personal."
    } else message = "Enhorabona! La nota mitjana de la classe es correspon amb l'esforç realitzat."

    print(message,resultDiv)
}