"use strict"


const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value

function catchValues(){

   return{
    num : document.getElementById("num").value,   
    resultDiv : document.getElementById("result"),
   } 

}

function literals(){

    return{
        message : "",
        err1 : "Introdueix un text.",
    }
}