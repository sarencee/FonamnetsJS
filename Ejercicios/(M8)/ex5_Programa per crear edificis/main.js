"use strict"

let name = "Vela", nFloors = 1, area = 1020

const Edifici1 = new Building (name, nFloors, area)

console.log(Edifici1)
console.log(Edifici1.cleanBuilding())
console.log(Edifici1.calculateSurveilanceCost(1000, true))

let name1 = "Hotel Hilton", nFloors1 = 22, area1 = 73.858 
const hotel1 = new Hotel(name1, nFloors1, area1)

console.log(hotel1)
console.log(hotel1.toString())