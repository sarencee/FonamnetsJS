"use strict"

function showFields(){
    const {buildingType, resultDiv} = catchValues()

    switch(buildingType){
        case "1":
            document.getElementById('hospitals').style.display='block'
            document.getElementById('cinemas').style.display='none'
            document.getElementById('hotels').style.display='none'

            break
        case "2":
            document.getElementById('hospitals').style.display='none'
            document.getElementById('cinemas').style.display='block'
            document.getElementById('hotels').style.display='none'
            break
        case "3":
            document.getElementById('hospitals').style.display='none'
            document.getElementById('cinemas').style.display='none'
            document.getElementById('hotels').style.display='block'
            break
        default: return print("Selecciona un tipus.", resultDiv)
    }
}

function createBuilding(){

    const {buildingType, name, floors, area, hospitalPatients, cinemaCapacity, hotelRooms, resultDiv} = catchValues()

    switch(buildingType){
        case "1": 
        const hospital = new Hospital(name, floors, area, hospitalPatients)
    
        console.log(hospital.toString())
    
        buildings.push(hospital)
    
        print("Hospital creat.", resultDiv)

        break

        case "2":
            const cinema = new Cinema(name, floors, area, cinemaCapacity)
            console.log(cinema.toString())
    
            buildings.push(cinema)
    
            print("Cinema creat.", resultDiv)
        break

        case "3":
            const hotel = new Hotel(name, floors, area, hotelRooms)
            
            console.log(hotel.toString())
    
            buildings.push(hotel)
    
            print("Hotel creat.", resultDiv)
    }

}

function seeBuilding(){

    const {buildingType, name, resultDiv} = catchValues()

    let classRef = null
    switch(buildingType){
        case "1": classRef = Hospital
        break
        case "2": classRef = Cinema
        break
        case "3": classRef = Hotel
        break
    }


    const buildingPosition = findBuilding(classRef, name, buildings)

    console.log(buildingPosition); // 0
    
    if (buildingPosition == -1) return print("Not found", resultDiv)

    let buildingActual = buildings[buildingPosition]

    print(`<pre>${buildingActual.toString()}</pre>`, resultDiv)

}


function eraseBuilding(){

    const {buildingType, name, resultDiv} = catchValues()

    let classRef = null
    switch(buildingType){
        case "1": classRef = Hospital
        break
        case "2": classRef = Cinema
        break
        case "3": classRef = Hotel
        break
    }


    const buildingPosition = findBuilding(classRef, name, buildings)
    
    if (buildingPosition == -1) return print("Edifici no trobat.", resultDiv)
   
    console.log(buildings)

    buildings.splice(buildingPosition, 1)

    console.log(buildings)

    print("Edifici eliminat.", resultDiv)
}

