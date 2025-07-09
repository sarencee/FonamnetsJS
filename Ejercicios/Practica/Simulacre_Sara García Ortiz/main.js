"use strict"

let name1 = "Jane",  dni1 = "123", age1 = 20

const astronaut1 = new Astronaut(dni1, name1, age1, 58)

console.log(astronaut1)

astronaut1.addHability("Math")
astronaut1.addHability("Math")
astronaut1.addHability("Math")

console.log(astronaut1)
console.log(astronaut1.habilities)

let dni2 = "345", name2 = "Alana", age2 = 34, specialty1 = "Biology"

const scientist1 = new Scientist (dni2, name2, age2, specialty1)
console.log(scientist1)
scientist1.createInvestigation("Reality of aliens", "Exobiology")

console.log(scientist1.toString())

let idM1 = "123", finished1 = true, name3 = "Exo life", lvl1 = 5

const miss1 = new Mission (idM1, finished1, name3, lvl1)

console.log(miss1)
console.log(miss1.toString())

console.log(miss1.addAstronaut(astronaut1))

console.log(astronaut1.misions)

function findPosition(dni, array){

    let i = 0
    let posicio = -1

    do{
        let dniActual = array[i].dni
        if (dni === dniActual) {
            posicio = i
        }

        i++
    } while (i < array.length && posicio == -1)

    return posicio
}

const print = (message, elementHTML) => elementHTML.innerHTML = message


function catchValuesAstronauts(){

   return{
    dni: document.getElementById("dni").value,   
    name : document.getElementById("name").value,
    age : document.getElementById("age").value,
    weight : document.getElementById("weight").value,
    hability : document.getElementById("hability").value,
    resultDiv : document.getElementById("result"),
   } 

}

function catchValuesMisio(){
    
   return{
    id: document.getElementById("id").value,   
    finished :  document.querySelector('#finished').checked,
    name : document.getElementById("nameMission").value,
    lvl : document.getElementById("lvl").value,
    hability : document.getElementById("hability").value,
    resultDiv : document.getElementById("result"),
   } 
}

function createAstronaut(){

    const {dni, name, age, weight, resultDiv} = catchValuesAstronauts()

    console.log(resultDiv)

    const astronaut = new  Astronaut(dni, name, age, weight)

    Astronauts.push(astronaut)

   print("Astronauta creat", resultDiv)

    console.log(Astronauts)

}

function showAstronauts(){

    const {resultDiv} = catchValuesAstronauts()

    let message = ""

    for (let i = 0; i < Astronauts.length; i++ ){
        message += `<pre>${Astronauts[i].toString()}</pre>`
    }
    print (message, resultDiv)
}

function learnHabilities(){

    const {dni, hability, resultDiv} = catchValuesAstronauts()

    if(!hability) return print("Itrodueix habilitat", resultDiv)

        let posicio = findPosition(dni, Astronauts)

        console.log(posicio)

        let astroActual = Astronauts[posicio]
        astroActual.addHability(hability)
        if (astroActual.addHability() == false) return print("Máxim d'habilitats 5, oblida alguna.", resultDiv)

       print(`Habilitat aprenuda ${hability}`, resultDiv)


}

function showHabilities(){

    const {dni, resultDiv} = catchValuesAstronauts()

    let posicio = findPosition(dni, Astronauts)

    if (posicio == -1) return print("notFound", resultDiv)

    let astronautActual = Astronauts[posicio]

    print(astronautActual.habilities, resultDiv);

}

function forgetHabilities(){

    const {dni, hability, resultDiv} = catchValuesAstronauts()

    if(!hability) return print("Introdueix habilitat", resultDiv)

        let posicio = findPosition(dni, Astronauts)
        let astroActual = Astronauts[posicio]

    if (posicio == -1) return print("notFound", resultDiv)

        //FIX

        let posicioHabilitat = findPosition(hability, astroActual.habilities)
        
        console.log(posicioHabilitat)
        astroActual.habilities.splice(posicioHabilitat,1)
        console.log(astroActual.habilities)



       print(`Habilitat oblidada: ${hability}`, resultDiv)
}

function createMision(){

    const {id, finished, name, lvl, resultDiv} = catchValuesMisio()

    console.log(finished)

    const misio = new Mission(id, finished, name, lvl)

    console.log(misio)

    Missions.push(misio)

   print(`Misió ${id}, ${name} creada.`, resultDiv)



}

function asignAstronaut(){

    const {id, resultDiv} = catchValuesMisio()
    const {dni } = catchValuesAstronauts()

    let posicioM = findPosition(id, Missions)
    let misioActual = Missions[posicioM]

    let posicioA = findPosition(dni, Astronauts)
    let astroActual = Astronauts[posicioA]

   misioActual.addAstronaut(astroActual)

   console.log(astroActual.missions)



}