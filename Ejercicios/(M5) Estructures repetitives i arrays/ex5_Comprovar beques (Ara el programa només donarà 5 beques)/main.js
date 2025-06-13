"use strict"

function comprovarBeca(){

    const resultDiv = document.getElementById("result");
    
    const majorEdat = 18;
    const maxBeca = 5;
    let bequesDonades = 0;
    let message = "Enhorabona "
    
    const arrayAlumnes = [];

    let err1 = "Introdueix el teu nom."
    let err2 = "Introdueix la teva edat."
    let err3 = "No acceptem nadons de menys de 12 mesos."


    while (arrayAlumnes.length < maxBeca){

        let userName = prompt("Com et dius?");
        if(!userName) return resultDiv.innerHTML= err1;

        
        let userAge = prompt("Escriu la teva edat:");
        if(!userAge) return resultDiv.innerHTML= err2;
        if (userAge < 0) return resultDiv.innerHTML = err3;
         
        let userTitol = confirm("Tens un títol universitari?");
        let userAtur = confirm("Estás a l'atur?");


        if (userAge >= 18 && userTitol || userAtur) arrayAlumnes.push(userName);

    }
     
    resultDiv.innerHTML = `${message}${arrayAlumnes}, teniu beca!`
    console.log(arrayAlumnes);

    
}