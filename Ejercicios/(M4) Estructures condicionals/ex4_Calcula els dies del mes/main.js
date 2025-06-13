"use strict"



function calcularDias(){
    
    let inputMonth = parseInt(document.getElementById("inputMonth").value);
    let resultDiv = document.getElementById("result");

    let month = null
    let days = null
    let message = ""
/*     let messageDefault = "Introdueix un númro entre 1 i 12."
 */
   let err0 = "Input es falsy."
    let err1 = "Introdueix un número entre 1 i 12."

    if(!inputMonth) return err0
    if (isNaN(inputMonth) || inputMonth <1 || inputMonth >12) return resultDiv.innerHTML = err1

    switch (inputMonth){
        case 1:
            month = "Géner"; days = 31;
            break
         case 2:
            month = "Febrer"; days = 28;
            break
         case 3:
            month = "Març"; days = 31;
            break
         case 4:
            month = "Abril"; days = 30;
            break
         case 5:
            month = "Maig"; days = 31;
            break
         case 6:
            month = "Juny"; days = 30;
            break
         case 7:
            month = "Juliol"; days = 31;
            break
         case 8:
            month = "Agost"; days = 31;
            break
         case 9:
            month = "Setembre"; days = 30;
            break
         case 10:
            month = "Octubre"; days = 31;
            break
         case 11:
            month = "Novembre"; days = 30;
            break
         case 12:
            month = "Desembre"; days = 31;
            break
        default: 
            resultDiv.innerHTML = err1;
            return;
     }
    
   
    message = `El mes ${month} té ${days} dies.`; /* Problema con los apostrofes */

    resultDiv.innerHTML = message; 
}      
        
