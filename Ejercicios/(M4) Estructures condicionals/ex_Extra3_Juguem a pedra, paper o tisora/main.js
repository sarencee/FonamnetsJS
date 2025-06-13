"use strict"

function play(){

    let numRandom = Math.floor(Math.random() * (4 - 1)) + 1;
    const resultDiv = document.getElementById("result");
    const userChoice = parseInt(document.getElementById("userChoice").value);

    let message = ""
    let messageStopPlaying = "Entenc que no vols jugar. Adeu."

    const err1 = "Introdueix un número."

    if (isNaN(userChoice)) return resultDiv.innerHTML = err1

    if(userChoice < 1 || userChoice > 3) return resultDiv.innerHTML = messageStopPlaying

    switch (numRandom){
        case 1: 
        if (userChoice == 1) {
            message = "Jo pedra i tu pedra. Hem empatat!"
        } else if (userChoice == 2){
            message = "Jo pedra i tu paper. Has guanyat!"
        } else {
            message = "Jo pedra i tu tisora. Has perdut."
        }

        case 2:
            if (userChoice == 1){
                message = "Jo paper i tu pedra. Has perdut."
            } else if (userChoice == 2){
                 message = "Jo paper i tu paper. Hem empatat."
            } else {
                message = "Jo paper i tu tisora. Has guanyat!"
            }
        
        case 3: 
            if (userChoice == 1){
                message = "Jo tisora i tu pedra. Has guanyat!"
            } else if (userChoice == 2){
                message = "Jo tisora i tu paper. Has perdut."
            }  else {
                message = "Jo tisora i tu tisora. Hem empatat."
            }  
    }

    resultDiv.innerHTML = message
}