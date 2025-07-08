"use strict"

let name = "Vela", nFloors = 1, area = 73858 

const Edifici1 = new Building (name, nFloors, area)

console.log(Edifici1)
console.log(Edifici1.cleanBuilding())
console.log(Edifici1.calculateSurveilanceCost(1000, true))

let name1 = "Hotel Hilton", nFloors1 = 22, area1 = 73858 
const hotel1 = new Hotel(name1, nFloors1, area1)

console.log(hotel1)
console.log()
console.log(hotel1.toString())

let name2 = "Hospital de Vilafranca", nFLoors2 = 2, area2 = 1950, patients = 26

const hospital1 = new Hospital (name2, nFLoors2, area2, patients)
console.log(hospital1)
console.log(hospital1.toString())

let name3 = "Cinema Montecarlo", nFLoors3 = 1, area3 = 3180 , capacity = 26

const cinema1 = new Cinema (name3, nFLoors3, area3, capacity)
console.log(cinema1)
console.log(cinema1.toString())
console.log(cinema1.screenMovie(10, 10))

