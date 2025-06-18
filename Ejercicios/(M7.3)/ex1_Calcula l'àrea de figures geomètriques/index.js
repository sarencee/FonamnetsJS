"use strict"

const print = (message, elementHTML) => elementHTML.innerHTML = message

function showDiv(HTMLDiv) {
  if (HTMLDiv.style.display === "none") {
    HTMLDiv.style.display = "block";
  } else {
    HTMLDiv.style.display = "none";
  }
}

function areaQuadrat(){

    const inputDivQuadrat = document.getElementById("inputDivQuadrat")

    showDiv(inputDivQuadrat)
    
    let costat = parseFloat(document.getElementById("costatQuadrat").value).toFixed(2)
    // let costat = parseFloat(prompt("Introdueix la mesura d'un costat:")).toFixed(2)

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

    let message = "El resultat és: "
    
    const err1 = ""

    switch (userChoice){
        case 1: print(message += areaQuadrat(), resultDiv)
        break
        case 2: print(message += areaTriangle(), resultDiv)
        break
        case 3: print(message += areaRectangle(), resultDiv)
        break
        case 4: print(message += areaCercle(), resultDiv)
        break
    }


}