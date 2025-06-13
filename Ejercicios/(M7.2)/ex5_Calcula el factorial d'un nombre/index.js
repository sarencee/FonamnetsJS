"use strict"

// Realitzar un programa on l’usuari/ària introdueix un
//  número i el programa crida a un mètode que retorna el 
// factorial del número introduït.

// El factorial d'un nombre n (enter, no negatiu) 
// és el producte de tots els nombres enters positius inferiors o iguals a n.

//TODO validacions, netejar codi, posar message

function factorial(n){
    let result = 1
    for (let i = 2; i <= n; i++){
        result *= i
    }
    return result
}

function main(){

    const resultDiv = document.getElementById("result")
    const num = parseInt(document.getElementById("num").value)

    const arrNum = []
    let resultat = factorial(num)

    resultDiv.innerHTML = factorial(num)

}