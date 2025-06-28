"use strict"

// Crea un programa que almacene 10 números enteros en un array.
//  Después, recorre el array y muestra solo los números pares.

// 📌 Objetivos:

// Declarar y llenar un array.

// Recorrerlo con un bucle.

// Aplicar lógica condicional para seleccionar valores.

/* TODO
HTML
    result
    boton
JS
    array
    input num
    bucle
    if
    display
*/
const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value

function main(){

    const arr = []
    const resultDiv = document.getElementById("result")

    let evenNumbers = []


    console.log(arr)

    while (arr.length < 10){
        
        let num = parseInt(prompt("introdueix un numero"))
        
        if (validate(num)){
            num = parseInt(prompt("introdueix un numero"))  
        } else {
            arr.push(num)
        }
    }

    for (let i = 0; i < arr.length; i++){

        if (arr[i] % 2 == 0){
            evenNumbers.push(arr[i])
        }
    }

    print(`Els número parells són ${evenNumbers}.`, resultDiv)
}