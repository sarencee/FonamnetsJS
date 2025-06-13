"use strict"


function genNum(){

    const resultDiv = document.getElementById("result");
    const randomNum = Math.ceil((Math.random() * 10)); //Ponre fuera

    let inputNum = prompt("Enter a number");
    let message = `Enhorabona, el número era ${randomNum}.`;
    const messageLoose = "Ho sento, has utilitzat tots els intents."

    let err1 = "Si us plau introdueix un número."
    let err2 = "Si us plau introdueix un número entre 1 i 10."
    let err3 = "Si us plau introdueix un número al camp de text"


    if (isNaN(inputNum)) return resultDiv.innerHTML = err1;
    if (inputNum < 1 || inputNum > 10) return resultDiv.innerHTML = err2;
    if (inputNum == "") return resultDiv.innerHTML = err3

    let i = 1

    while (inputNum != randomNum && i < 5){

        if(i == 4) message = messageLoose;
        // if (inputNum != "") {
        inputNum = prompt("No era aquell, tria un altre"); //TODO what if user doesnt put input
        i++;
        // }
    }


    resultDiv.innerHTML = message
}