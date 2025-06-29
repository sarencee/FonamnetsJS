"use strict"

// Omple un array amb 20 números random entre l'1 i el 50.

// Quan estigui ple, mostra la suma de tots els seus 
// nombres parells i la suma de tots els seus números imparells.

const print = (mess, elementHTML) => elementHTML.innerHTML = mess

function catchValues(){

   return{
    resultDiv : document.getElementById("result"),
   } 

}

function literals(){

    return{
        message : "",
        err1 : "Introdueix un text.",
    }
}

function generateArray(){

    let array = []
    while ( array.length < 20){

        array.push(Math.floor(Math.random() * 51))
    }

    return array
}

function addEven(array) {
    let totalEven = 0;
    let totalOdd = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] % 2 === 0 ? totalEven += array[i] : totalOdd += array[i];
    }
    return { totalEven, totalOdd };
}

function main(){

    const {resultDiv} = catchValues()
    let {message, err1} = literals()

    
    let randomArray = generateArray()
    
    const {totalEven, totalOdd} = addEven(randomArray)

    message = `La suma dels números parells és: ${totalEven}. <br> La suma dels números imparells és ${totalOdd}.`
    print (message, resultDiv)

}