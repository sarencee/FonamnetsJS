"use strict"


const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value
const valNum = num => isNaN(num) // true
const valString = str => !isNaN(str) // true

function catchValues(){

   return{
    priceNoodles : parseFloat(document.getElementById("price-noodles").value).toFixed(2),  
    priceSquid : parseFloat(document.getElementById("price-squid").value).toFixed(2),   
    priceShrimp : (parseFloat(document.getElementById("price-shrimp").value)).toFixed(2),   
    numberFriends : parseInt(document.getElementById("number-friends").value),   
    resultDiv1 : document.getElementById("result1"),
    resultDiv2 : document.getElementById("result2"),
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