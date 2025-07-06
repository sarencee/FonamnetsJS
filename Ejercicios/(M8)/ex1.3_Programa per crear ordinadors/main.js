"use strict"

function crearOrdinador(){

    const resultDiv = document.getElementById("result")
    let  mess = ""

    let marca1 =  prompt("Introdueix la marca de l'ordinador:")
    let model1 =  prompt("Introdueix el model de l'ordinador:")
    let processador1 =  prompt("Introdueix el processador de l'ordinador:")
    let ram1 =  prompt("Introdueix la ram de l'ordinador:")
    let discDur1 =  prompt("Introdueix el discDur de l'ordinador:")
    

    const ordinador1 = new Ordinador(marca1, model1, processador1, ram1, discDur1)
    console.log(ordinador1)

     let marca2 =  prompt("Introdueix la marca de l'ordinador:")
    let model2 =  prompt("Introdueix el model de l'ordinador:")
    let processador2 =  prompt("Introdueix el processador de l'ordinador:")
    let ram2 =  prompt("Introdueix la ram de l'ordinador:")
    let discDur2 =  prompt("Introdueix el discDur de l'ordinador:")

    const ordinador2 = new Ordinador(marca2, model2, processador2, ram2, discDur2)
    console.log(ordinador2)

    alert(ordinador1.currentProgram(prompt("Introdueix un programa")))
    console.log(ordinadors)

    mess = `<pre>${ordinador1.toString()}</pre><pre>${ordinador2.toString()}</pre>`

    print(mess, resultDiv)
}
