"use strict"

// nvertir array

// Crea un array nuevo que contenga los mismos elementos pero en orden inverso.

// Filtrar mayores de edad

// A partir de un array de edades, guarda 
// en otro array sólo las que son ≥ 18.

// Longitud de palabras

// Dado un array de palabras, muestra la longitud de cada una.

// Palabra más larga

// Muestra cuál es la palabra más larga del array.





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

function buscarPromedio(array){

    let suma = 0 

    for (let i = 0; i < array.length; i++){
        suma += array[i]
    }

    let promedio = suma / array.length

    if (promedio >= 5){
        return `Aprobado con ${promedio}`
    } else return `No aprobado con ${promedio}`

}

function buscarNumero(num, array){

    let mess = ``

    for (let i  = 0; i < array.length; i++){

        if (num == array[i]) {mess = `${num} está en el array`
        } else mess=  `${num} no está en el array`
    }

    return mess
}

function inverseArray(array){

        let arrayInverse = []

    for (let i = 0; i < array.length; i++){

        arrayInverse.unshift(array[i])
    }

    return arrayInverse
}

function buscarMayorEdad(array){
    let arrayMayorEdad = []
    for(let i = 0; i < array.length; i++){
        if (array[i] >= 18) arrayMayorEdad.push(array[i])
    }

    return arrayMayorEdad
}

function longitudPalabras(array){

    let wordsLength = []
    
    for (let i = 0; i <array.length; i++){
        
        wordsLength.push(array[i].length)
    }
    return wordsLength
}


function main(){

let array = createArray()
console.log(`El array creado ${array}`)

let suma = sumaArray(array)
console.log(`Suma del array ${suma}`)

let mayor = findHighestNumber(array)
console.log(`Mayor numero del array: ${mayor}`)

let numPars = findEvenNumbers(array)
console.log(`Numeros pares del array: ${numPars}`)

let promedio = buscarPromedio(array)

console.log(`Promedio del array: ${promedio}`)

let numInput = prompt("Escribe un numero para buscar")
let resultadoBusqueda = buscarNumero(numInput, array)
console.log(`Resultado de busqueda: ${resultadoBusqueda}`)

let arrayInverse = inverseArray(array)
console.log(`Array invertido: ${arrayInverse}`)

let arrayMayorEdad = buscarMayorEdad(array)
console.log(`Array de mayores de edad: ${arrayMayorEdad}`)

let arrayWords = []

do{

    arrayWords.push(prompt("introdueix una paraula"))

} while (arrayWords.length < 5)

let arrayLogitudPalabras = longitudPalabras(arrayWords)

console.log(findHighestNumber(arrayLogitudPalabras))

}
