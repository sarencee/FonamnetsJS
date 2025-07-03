"use strict"

function crearFakeHotel(){

    let name = "Barcelona"
    let nRooms = 56
    let nFloors = 2
    let hotelArea = 500
    
    
    const hotel1 = new Hotel(name, nRooms,  nFloors, hotelArea)
    let hotelCosts1 = hotel1.calcularManteniment()
    console.log(hotelCosts1)
    hotels.push(hotel1)
    
    let name2 = "Lleida"
    let nRooms2 = 104
    let nFloors2 = 3
    let hotelArea2 = 1000
    let hotelCosts2 = Hotel.calcularManteniment


    const hotel2 = new Hotel(name2, nRooms2,  nFloors2, hotelArea2, hotelCosts2)
    hotels.push(hotel2)


    console.log(hotels)


}

crearFakeHotel()