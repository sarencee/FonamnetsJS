"use strict"


const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value
const valNum = num => isNaN(num) // true
const valString = str => !isNaN(str) // true

function catchValues(){

   return{
    name : document.getElementById("name").value,   
    nRooms : document.getElementById("nRooms").value,   
    nFloors : document.getElementById("nFloors").value,   
    hotelArea : document.getElementById("hotelArea").value,   
    resultDiv : document.getElementById("result"),
   } 

}


