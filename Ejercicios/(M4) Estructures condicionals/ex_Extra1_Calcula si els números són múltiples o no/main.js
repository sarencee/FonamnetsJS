"use strict"

function calcula(){

    let resultDiv = document.getElementById("result");
    let dividendInput = parseInt(document.getElementById("dividend").value);
    let divisorInput = parseInt(document.getElementById("divisor").value);

    const err1 = "Introudeix un dividend."
    const err2 = "Introudeix un divisor."
    const err3 = "Introudeix un divisor entre 2 i 7."

    let messageMultiple = `${dividendInput} és multiple de ${divisorInput}.`;
    let messageNoMultiple = `${dividendInput} no és multiple de ${divisorInput}.`;

    if (!dividendInput) return resultDiv.innerHTML =  err1;
    if (!divisorInput) return resultDiv.innerHTML =  err2;
    if (divisorInput <2 || divisorInput >7) return resultDiv.innerHTML =  err3;

    if (divisorInput){
        if (dividendInput % divisorInput == 0){
            resultDiv.innerHTML = messageMultiple;
        } else {resultDiv.innerHTML = messageNoMultiple;}
    }
}
