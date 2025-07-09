"use strict"

let name = "Vela", nFloors = 1, area = 73858 

const Edifici1 = new Building (name, nFloors, area)

console.log(Edifici1)
console.log(Edifici1.cleanBuilding())
console.log(Edifici1.calculateSurveilanceCost(1000, true))

let name1 = "Hotel Hilton", nFloors1 = 22, area1 = 73858, rooms1 = 583
const hotel1 = new Hotel(name1, nFloors1, area1, rooms1)

console.log(hotel1)
console.log(hotel1.roomService())
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

function showHospitalSection(){

    document.getElementById('hospitals').style.display='block'
    document.getElementById('cinemas').style.display='none'
    document.getElementById('hotels').style.display='none'
    
}

function showCinemaSection(){

    document.getElementById('hospitals').style.display='none'
    document.getElementById('cinemas').style.display='block'
    document.getElementById('hotels').style.display='none'

}

function showHotelSection(){

    document.getElementById('hospitals').style.display='none'
    document.getElementById('cinemas').style.display='none'
    document.getElementById('hotels').style.display='block'

}
const print = (message, elementHTML) => elementHTML.innerHTML = message

function catchValues(){

   return{
    hospitalName : document.getElementById("hospitalName").value,  
    hospitalFloors : document.getElementById("hospitalFloors").value,  
    hospitalArea : document.getElementById("hospitalArea").value,   
    hospitalPatients : document.getElementById("hospitalPatients").value,   
    resultDiv : document.getElementById("result"),
   } 

}

function createHospital(){

    const {hospitalName, hospitalFloors, hospitalArea, hospitalPatients, resultDiv} = catchValues()

    const hospital = new Hospital(hospitalName, hospitalFloors, hospitalArea, hospitalPatients)

    console.log(hospital.toString())

    buildings.push(hospital)

    print("Hospital creat.", resultDiv)

}

function seeHospital(){

        const {hospitalName, hospitalFloors, hospitalArea, hospitalPatients, resultDiv} = catchValues()

    const hospitalPosition = buildings.findIndex(hospital => hospital.name === hospitalName);

    console.log(hospitalPosition); // 0
    
    if (hospitalPosition == -1) return print("Not found", resultDiv)

    let hospitalActual = buildings[hospitalPosition]

    print(`<pre>${hospitalActual.toString()}</pre>`, resultDiv)

}

