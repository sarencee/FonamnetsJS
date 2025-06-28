"use strict"

const print = (message, elementHTML) => elementHTML.innerHTML = message

function catchValues(){

   return{
    resultDiv : document.getElementById("result"),
    marca : document.getElementById("marca").value,   
    model : document.getElementById("model").value,   
    processador : document.getElementById("processador").value,   
    ram : parseInt(document.getElementById("ram").value),   
    discDur : parseInt(document.getElementById("discDur").value),   
   } 
}

const valText = (string) => string == ""
const valNum = (num) => num = isNaN(num)
const err1 = "error"

function createOrdinador(){

    const { resultDiv, marca, model, processador, ram, discDur } = catchValues()
    
    if (ordinadors.length >= 2) {
        return print("Només es poden introduir dos ordinadors!", resultDiv);
    }
        
    if (valNum(ram) || valNum(discDur) || valText(marca) || valText(model) || valText(processador)) return print(err1, resultDiv)

    const ordinador = new Ordinador (marca, model, processador, ram, discDur)
    ordinadors.push(ordinador)

    const programa = prompt("Introdueix un programa")
    alert(ordinador.currentProgram(programa))

    if (ordinadors.length < 2)  {
        print("Ordinador creat, introdueix un altre ordinador", resultDiv)
    } else {return print("Segón ordinador creat, pulsa el botó 'Veure' per veure les dades", resultDiv)}

}

function readAll() { 

    const { resultDiv } = catchValues();

    print("", resultDiv);

    ordinadors.forEach(ordinador => {resultDiv.innerHTML += `<pre>${ordinador.toString()}</pre>`;});
}



