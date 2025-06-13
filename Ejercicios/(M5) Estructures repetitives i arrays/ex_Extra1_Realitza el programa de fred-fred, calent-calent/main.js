"use strict"

function play(){


    const resultDiv = document.getElementById("result");
    const N =  Math.floor(Math.random() * (500 - 1)) + 1;
    
    let userNumberInput = parseInt(prompt("Introdueix número"));

    while (userNumberInput != N && !isNaN(userNumberInput)){
         let distancia = Math.abs(N - userNumberInput);

        if (distancia >= 50 && userNumberInput > N){
            userNumberInput = parseInt(prompt("Fred, fred: el teu número és més gran"))
        } else if (distancia >= 50 && userNumberInput < N){
            userNumberInput =parseInt(prompt("Fred, fred: el teu número és més petit"))
        }

        if (distancia > 15 && distancia < 50 && userNumberInput > N){
            userNumberInput =parseInt(prompt("Tebi, tebi: el teu número és més gran"))
        } else if (distancia > 15 && distancia < 50 && userNumberInput < N){
            userNumberInput =parseInt(prompt("Tebi, tebi: el teu número és més petit"))
        }

        if (distancia <= 15 && userNumberInput > N){
            userNumberInput = parseInt(prompt("Calent, calent: el teu número és més gran"))
        } else if (distancia <= 15 && userNumberInput < N){
            userNumberInput = parseInt(prompt("Calent, Calent: el teu número és més petit"))
        }
        
    }

    resultDiv.innerText = `Correcte! El número era ${N}.`;

}