"use strict"

function calcula(){

    let resultDiv = document.getElementById("result");
    let numWordsInput = parseInt(document.getElementById("numWords").value);

    // console.log(numWordsInput);
    const arrayWords = [];

    let err1 = "Introdueix un nombre."
    let err2 = "Introdueix al menys un número."
    let err3 = "Introdueix un número menor o igual a 10."
    let err4 = "No pots deixar paraules buides."
    
    if (isNaN(numWordsInput)) return resultDiv.innerHTML = err1
    if (numWordsInput < 0) return resultDiv.innerHTML = err2
    if (numWordsInput > 10) return resultDiv.innerHTML = err3

    for (let i= 0; i <numWordsInput; i++){
        let promptWord = prompt("Introdueix una paraula");
        if (promptWord == "") return resultDiv.innerHTML = err4;

        arrayWords.push(promptWord)
        
    }

    resultDiv.innerHTML = `Les paraules son: ${arrayWords}.`
}