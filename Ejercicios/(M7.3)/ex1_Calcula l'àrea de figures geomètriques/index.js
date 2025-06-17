"use strict"

/*
HTML:
    titol
    mostra de operacions
    select operacio
    mostar result
JS
    catch input sleccionat
    make funcio per cada tipus de seleccio
    make main funcio per que cridi les altres
    fer un switch per cada cas
    validar
    mostar resultat
*/

const print = (message, elementHTML) => elementHTML.innerHTML = message



function areaQuadrat(){

    let costat = parseFloat(prompt("Introdueix la mesura d'un costat:")).toFixed(2)

    return (costat * costat).toFixed(2)
}

function areaTriangle(){
    let base = parseFloat(prompt("Introdueix la base:")).toFixed(2)
    let altura = parseFloat(prompt("Introdueix l'altura")).toFixed(2)

    return ((base * altura )/ 2).toFixed(2)
}

function areaRectangle(){

    let base = parseFloat(prompt("Introdueix la base:")).toFixed(2)
    let altura = parseFloat(prompt("Introdueix l'altura:")).toFixed(2)

    return (base * altura).toFixed(2)
}

function areaCercle(){
    
    let radio = parseFloat(prompt("Introdueix el radio:")).toFixed(2)

    return (Math.PI * radio**2).toFixed(2)
}





function main(){

    const resultDiv = document.getElementById("result")
    const userChoice = parseInt(document.getElementById("choice").value)

    console.log(userChoice)
    let message = "El resultat és: "
    // let areaQuadrat = areaQuadrat()
    
    const err1 = ""

    switch (userChoice){
        case 1: print(message += areaQuadrat(), resultDiv)
        break
        case 2: print(areaTriangle(), resultDiv)
        break
        case 3: print(areaRectangle(), resultDiv)
        break
        case 4: print(areaCercle(), resultDiv)
        break
    }


}