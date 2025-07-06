"use strict"

const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value

const valNum = num => isNaN(num) // true
const valString = str => !isNaN(str) // true

function catchValues(){

   return{
    marca : document.getElementById("marca").value,   
    model : document.getElementById("model").value,   
    processador : document.getElementById("processador").value,   
    ram : (parseFloat(document.getElementById("ram").value)).toFixed(2),   
    discDur : (parseFloat(document.getElementById("disc-dur").value)).toFixed(2),   
    resultDiv : document.getElementById("result"),
   } 

}

function literals(){

    return{
        message : "",
        err1 : "Introdueix un text.",
    }
}

function findPosition(marca, ordinadors){

    let i = 0
    let position = -1

    do{
        let marcaActual = ordinadors[i].marca
        if (marcaActual === marca){
            position = i
        }
        i++
    } while (i < ordinadors.length && position == -1)

    return position
}
