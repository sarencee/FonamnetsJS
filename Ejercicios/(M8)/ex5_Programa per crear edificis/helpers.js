"use strict"

const print = (message, elementHTML) => elementHTML.innerHTML = message

function catchValues(){

   return{
    
    buildingType : document.getElementById("buildingType").value,  
    name : document.getElementById("name").value,  
    floors : document.getElementById("floors").value,  
    area : document.getElementById("area").value,   
    hospitalPatients : document.getElementById("hospitalPatients").value, 

    // cinemaName : document.getElementById("cinemaName").value,   
    cinemaCapacity : document.getElementById("cinemaCapacity").value,  

    hotelRooms : document.getElementById("hotelRooms").value,   
    resultDiv : document.getElementById("result"),
   } 

}

    function findBuilding(type, buildingName, array){

        let position = -1
        
        for (let i = 0; i < array.length; i++){
            if(array[i] instanceof type && array[i].name == buildingName){
                position = i
            }
        }
        
        return position
    }