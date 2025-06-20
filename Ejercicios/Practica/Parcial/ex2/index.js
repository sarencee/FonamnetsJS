"use strict"

const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value

function catchValues(){

   return{
    tempObject : parseFloat(document.getElementById("tempObject").value), 
    tempAmbience : parseFloat(document.getElementById("tempAmbience").value),
    pasosDiv : document.getElementById("pasos"),
    resultDiv : document.getElementById("result"),
   } 

}

function literals(){

   return{
    mess1 : "",
    err1 : "Introdueix un número als dos camps.",

    }
 
}

function tempDown(tempObject, tempAmbience){

    const tasa = 0.5
    let distancia = tempObject - tempAmbience

    let tempActual = tempObject

    let minuts = 0
    
    let {pasosDiv} = catchValues()

    pasosDiv.innerHTML = ""

    while (distancia >= 0.1){
        
            
        tempActual =  tempActual - tasa
        distancia = tempActual - tempAmbience
        minuts++

        pasosDiv.innerHTML += `Minut ${minuts}, temperatura actual: ${tempActual}ºC.<br>`

    }
     
    return [tempActual, minuts]
}

function simulation(){

    const {tempObject, tempAmbience, resultDiv} = catchValues()
    let {mess1, err1} = literals()
    if (validate(tempObject) || validate(tempAmbience)) return print(err1, resultDiv)

    let resultat = tempDown(tempObject, tempAmbience)

    let temFinal = resultat[0]
    let minuts = resultat[1]

    console.log(resultat)

    print(mess1 = `La temperatura actual de l'objecte és: ${temFinal}ºC i han passat ${minuts} minuts.`, resultDiv)

}
