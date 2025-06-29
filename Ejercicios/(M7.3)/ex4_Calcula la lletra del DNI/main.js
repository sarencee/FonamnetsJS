"use strict"

// L’usuari/ària ha d’introduir un DNI i el programa ha de dir si la lletra
//  és correcte o no amb el nombre de DNI. 
// Si la lletra no és correcta, ha de dir quina lletra és la correcta.

// Per calcular la lletra DNI has de prendre el número de
//  DNI a verificar i dividir-lo entre 23. 
// La resta es reemplaça per una lletra que ja està assignada a aquest nombre 
// mitjançant la taula adjunta: 

// RESTO 01 23456789 10 11 12 13 14 15 16 17 18 19 20 21 22
// LETRA TRWAGMYFPDX B N J Z SQVH L C

const print = (message, elementHTML) => elementHTML.innerHTML = message

function catchValues(){

   return{
    dni : document.getElementById("dni").value,   
    resultDiv : document.getElementById("result"),
   } 

}

function literals(){

    return{
        message : "",
        err1 : "Introdueix un DNI.",
        err2 : "El DNI ha de tenir 9 carácters.",
        err3 : "El DNI ha d'acabar amb una lletra.",
    }
}

function verifyDni(num){

    const arrLetrasDni = ["T", "R", "W","A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L" ,"C", "K", "E"]
    let  letraCorrecta = arrLetrasDni[num % 23]
    return letraCorrecta
}

function main(){

    const {dni, resultDiv} = catchValues()
    let {message, err1, err2, err3} = literals()


    if (dni == false) return print(err1,resultDiv)
    if (dni.length !== 9) return print(err2,resultDiv)
        
        const arrayDni = dni.split("")
        
        const dniLetter = arrayDni.slice(arrayDni.length -1)
        const dniNumber = parseInt((arrayDni.slice(0, arrayDni.length -1)).join(""))
    
    if (!isNaN(dniLetter[0])) return print(err3, resultDiv)     
    
    let letracorrecta = verifyDni(dniNumber)
    console.log(letracorrecta)

    if (letracorrecta === dniLetter[0].toUpperCase()){
        message = `La lletra ${dniLetter} és la correcta pel dni ${dni}.`
    } else message = `La lletra ${dniLetter} no és la correcta pel dni ${dni}. La lletra correcta per aquest dni és ${letracorrecta}.`

    print(message, resultDiv)


}