"use strict"


const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value // if value == falsy returns true
const valNum = num => isNaN(num) // true
const valString = str => !isNaN(str) // true

function catchValuesClient(){

   return{
    dni : document.getElementById("dni").value,  
    accountName : document.getElementById("accountName").value,  
    firstName : document.getElementById("firstName").value,   
    lastName : document.getElementById("lastName").value,   
    amount : parseFloat(document.getElementById("amount").value),   
    resultDiv : document.getElementById("result"),
   } 

}


function findPositionClient(dni, array){

    let position = -1
    let i = 0

    if (array.length < 1) return position

    do{
        let currentDni = array[i].dni
        if (dni === currentDni){
            position = i
        }

        i++
    } while (i < array.length && position == -1)

    return position
   
}

function findPositionAccount(accName, arrayAcc){

    let positionAcc = -1
    let i = 0

    if (arrayAcc.length < 1) return positionAcc

    do{
        if (arrayAcc[i].name == accName){
            positionAcc = i
        }

        i++
    } while (i < arrayAcc.length && position == -1)

    return positionAcc
   
}

function validateClient(dni, firstName, lastName, resultDiv){

   if (validate(dni) || validate(firstName) || validate(lastName)){

      print(responses.errEmpyValues.message, resultDiv)
      return false
   } 

   if (valString(firstName) || valString(lastName)){
      
      print(responses.errBadRequest.message, resultDiv)
      return false
   }

   let position = findPositionClient(dni, clients)

   if (position !== -1){

      print(responses.errAlreadySaved.message, resultDiv)
      return false
   }

   return true
}

function validateAcc(dni, accountName, resultDiv){

   if(validate(dni) || validate(accountName)){
      print (responses.errEmpyValues.message, resultDiv)
      return false
   }

   let position = findPositionClient(dni, clients)

   if (position == -1){

      print(responses.errNotFound.message, resultDiv)
      return false
   }

   return true
}