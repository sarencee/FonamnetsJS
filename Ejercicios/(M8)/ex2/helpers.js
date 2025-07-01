"use strict"


const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value

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
        notFound : "Hotel not found",
        err1 : "Introdueix un text.",
    }
}