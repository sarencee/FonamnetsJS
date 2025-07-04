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


function findPosition(dni){

    let position = -1
    let i = 0

    do{
        let currentDni = clients[i].dni
        if (dni === currentDni){
            position = i
        }

        i++
    } while (i < clients.length && position == -1)

    return position
   
}

function validateClient(dni, firstName, lastName, resultDiv){

   if (validate(dni) || validate(firstName || validate(lastName))){

      print(responses.errEmpyValues.message, resultDiv)
      return false
   } 

   if (valString(firstName) || valString(lastName)){
      
      print(responses.errBadRequest.message, resultDiv)
      return false
   }

   let position = findPosition(dni)

   if (position !== -1){

      print(responses.errAlreadySaved.message, resultDiv)
      return false
   }

   return true
}