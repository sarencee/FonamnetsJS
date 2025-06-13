"use strict"

function calcular(){

    const resultDiv = document.getElementById("result");
    const numPersonesInput = parseInt(document.getElementById("numPersones").value)
    const arrayNumeroPersones = []

    const message = "La mitja d'edat és:"

    const err1 = "Introdueix una edat valida."
    const err2 = "Introdueix una nombre vàlid."


    if (isNaN(numPersonesInput)) return resultDiv.innerHTML = err2

    for (let i = 0; i < numPersonesInput; i++){
           
        let edat =  parseInt(prompt("introdueix edat"));
        while (isNaN(edat) || edat < 0 || edat > 120){
            alert(err1)
            edat = parseInt(prompt("introdueix edat"))
        }
        arrayNumeroPersones.push(edat);
       
    }

    let sum = 0

    for (let i = 0; i < arrayNumeroPersones.length; i++){
      sum += arrayNumeroPersones[i]
     }
    
    function ferMitjana(a, b){
        return a / b
    }

    let mitjana = (ferMitjana(sum, arrayNumeroPersones.length))

    resultDiv.innerHTML = `${message} ${mitjana}.`
}
