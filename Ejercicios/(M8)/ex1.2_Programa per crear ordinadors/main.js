"use strict"

// Crea una classe en JavaScript anomenada "Ordinador", en un fitxer anomenat ordinador.js

// Aquesta classe tindrà com a atributs la marca, el model, el processador, la quantitat de memòria RAM i la capacitat del disc dur.

// A més del function Object() { [native code] }, ha de disposar dels següents mètodes:

// Mètodes que permetin consultar cadascun dels atributs (getters).
// Mètodes que permetin modificar el processador,
//  la quantitat de memòria ram i la capacitat del disc dur. (setters).
// Un mètode que rebrà un paràmetre i retornarà una frase que digui:
// "En aquests moments s'està executant: 'X'"
//  (X és el paràmetre rebut pel mètode i que normalment serà el nom d'un programa).
// Exemple: "En aquests moments s'està executant: Chrome" 
// Un mètode que retornarà una descripció completa de l'ordinador (toString()).
// En un altre fitxer anomenat main.js, crea la funció crearOrdinadors().

// Dintre d'aquesta funció, demanarem a l'
// usuari/ària mitjançant promtps les dades de dos ordinadors. 

// Un cop introduïdes les dades dels dos ordinadors, crida
//  als mètodes de la classe Ordinador per comprovar que funcionen correctament.

const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value

function catchValues(){

   return{
    marca : document.getElementById("marca").value,   
    model : document.getElementById("model").value,   
    processador : document.getElementById("processador").value,   
    ram : document.getElementById("ram").value,   
    discDur : document.getElementById("discDur").value,   
    program : document.getElementById("program").value,   
    resultDiv1 : document.getElementById("result1"),
    resultDiv2 : document.getElementById("result2"),
   } 

}

function literals(){

    return{
        mess1 : "",
        mess2 : "En aquest moment s'esta executant: ",
        err1 : "Introdueix un text.",
    }
}

function createComputer(){

    const {marca, model, processador, ram, discDur, program, resultDiv1} = catchValues()
    print("", resultDiv1)

    // if ()
        const ordinador = new Ordinador (marca, model, processador, ram, discDur, program)
        ordinadors.push(ordinador)
        print ("Ordinador creat", resultDiv1)


}

function mostrarOrdinadors(){
    const {resultDiv1, resultDiv2} = catchValues()
    let {mess1,mess2, err1} = literals()

    ordinadors.forEach( ordinador => mess1 += `<pre>${ordinador.toString()}</pre>`)
    ordinadors.forEach(ordinador => { mess2 += `${ordinador.currentProgram()}`});

    


    print("", resultDiv1)
    print("", resultDiv2)
    print(mess1, resultDiv1)
    print(mess2, resultDiv2)
}

