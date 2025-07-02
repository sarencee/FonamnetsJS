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

function literals(){

    return{
        message : "",
        mCreated : "Hotel created.",
        mErased : "Hotel erased.",
        mModifica : "Modify hotel data.",
        mUpdate : "Hotel updated.",
        notFound : "Hotel not found.",
        err1 : "Introdueix un text.",
        err2 : "Introdueix un número.",
        err3 : "No pots deixar camps en blanc.",
        err4 : "Introdueix el nom de l'hotel.",
    }
}
