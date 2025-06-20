"use strict"

const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value

function catchValues(){

   return{
    userIinput : document.getElementById("userInput").value,   
    resultDiv : document.getElementById("result")
   } 

}

function literals(){

   return{
    mess1 : "",
    err1 : "Introdueix un text.",
    }
 
}

function unduplicate(array){

   let newArray = []
   
   for (let i = 0; i < array.length; i++){

       let igual = false

    for (let j = 0; j < newArray.length; j++){
        
        if (array[i] === newArray[j]) igual = true
    }

    if (!igual) newArray.push(array[i])
   }

   return newArray
}

function cleanArray(){

    const {userIinput, resultDiv} = catchValues()
    
    let {mess1, err1} = literals()


    if (validate(userIinput)) return print(err1, resultDiv)

    let arrayInput = userIinput.split(" ")

    let arrUnduplicated = unduplicate(arrayInput)

    print(mess1 = `L'array sense duplicats és: ${arrUnduplicated}.`, resultDiv )


}