"use strict"


const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value
const valNum = num => isNaN(num) // true
const valString = str => !isNaN(str) // true

function catchValuesClient(){

   return{
    dni : document.getElementById("dni").value,   
    firstName : document.getElementById("firstName").value,   
    lastName : document.getElementById("lastName").value,   
    resultDiv : document.getElementById("result"),
   } 

}


