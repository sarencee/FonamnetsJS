"use strict"

//TODO Validacions

const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value

function catchValues(){

   return{
    num : document.getElementById("num").value,   
    resultDiv : document.getElementById("result")
   } 
}

function square(num){ // num= 5
    
    let linea = ""

    for (let i = 1; i <= num; i++){

        for (let k = 0; k < i; k++) {
        linea += "$";
        }

        for (let j = i; j < num; j++) {
            linea += "*";
        }

        linea += "<br>"
    }

    return linea
}

function draw(){

    const {num, resultDiv} = catchValues()

    let message1 = square(num)

    print(message1, resultDiv)
}
