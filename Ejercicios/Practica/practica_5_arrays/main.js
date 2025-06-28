"use strict"

// 🔹 Nivel 1: Básicos con Arrays
// Suma de elementos

// Crea un array de 5 números.

// Calcula la suma total usando un for.

// Número más grande

// Recorre un array y muestra cuál es el número más grande.

// Contar elementos

// Cuenta cuántos números pares hay en el array.

function catchValues(){

   return{
    resultDiv : document.getElementById("result"),
   } 

}

function createArray(){

    let array = []
    let num = ""

    do{
        
        num = parseInt(prompt("introdueix un numero"))
        array.push(num)

    } while (array.length < 5)

    return array
}

function sumaArray(array){

    let suma = 0
    for(let i = 0; i < array.length; i++){

        suma += array[i]
    }

    return suma
}

function findHighestNumber(array){

    let mayor  = array[0]
    for(let i = 0; i < array.length; i++){
        if (array[i] > mayor){
            mayor = array[i]
        }
    }

    return mayor

}

function findEvenNumbers(array){

    let numParArray = []

    for (let i = 0; i < array.length; i++){
         if (array[i] % 2 == 0){
            numParArray.push(array[i])
         }
    }

    return numParArray
}

function main(){

let array = createArray()
console.log(array)

let suma = sumaArray(array)
console.log(suma)

let mayor = findHighestNumber(array)
console.log(mayor)

let numPars = findEvenNumbers(array)
console.log(numPars)
}