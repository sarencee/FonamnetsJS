"use strict"

function findPosition(name){

    let i = 0
    let posicio = -1

    do{
        let nameActual = hotels[i].name
        if (name === nameActual) {
            posicio = i
        }

        i++
    } while (i < hotels.length && posicio == -1)

    return posicio
}

function crearHotel(){

    const {name, nRooms, nFloors, hotelArea, resultDiv} = catchValues()
    const {mFound, err1, err2, err3, mCreated, mName} = literals() 

    if (validate(name)) return print(mName, resultDiv)

    let posicio = findPosition(name)
    if (posicio !== -1) return print(mFound, resultDiv)

    if (validate(nRooms) || validate(nFloors) || validate(hotelArea)) return print(err3, resultDiv)


    if (valNum(nRooms) || valNum(nFloors) || valNum(hotelArea)) return print(err2, resultDiv)
    if (valString(name)) return print(err1, resultDiv)


    const hotel = new Hotel(name, nRooms, nFloors, hotelArea)
    hotels.push(hotel)

    print(mCreated, resultDiv)

}

function donarDeBaixaHotel(){
    const {name, resultDiv} = catchValues()
    const {notFound, mErased} = literals()

    let posicio = findPosition(name)

    if (posicio == -1) return print(notFound, resultDiv)

    hotels.splice(posicio, 1)

    print (mErased, resultDiv)

}

function veureHotel(){
    const {name, resultDiv} = catchValues()
    const {message, notFound, err4} = literals()

    if (validate(name)) return print(err4, resultDiv)

    let posicio = findPosition(name)

    if (posicio == -1) return print(notFound, resultDiv)

    let hotelActual = hotels[posicio]

    print(message, resultDiv)

    print(`<pre>${hotelActual.toString()}</pre>`, resultDiv);

}

function veureAll(){

    
    const {resultDiv} = catchValues()

    let message = ""

    for (let i = 0; i < hotels.length; i++ ){
        message += `<pre>${hotels[i].toString()}</pre>`
    }
    print (message, resultDiv)
}

function modificarHotel(){

    let {name, resultDiv} = catchValues()
    const { mModifica, notFound,err4} = literals()

    if (validate(name)) return print(err4, resultDiv)


    let posicio = findPosition(name)

    if (posicio == -1) return print(notFound, resultDiv)
        
    document.getElementById("createButton").style.display = "none";
    document.getElementById("seeButton").style.display = "none";
    document.getElementById("eliminateButton").style.display = "none";
    document.getElementById("updateButton").style.display = "block";

    let hotelActual = hotels[posicio]

    document.getElementById("nRooms").value = hotelActual.nRooms
    document.getElementById("nFloors").value = hotelActual.nFloors
    document.getElementById("hotelArea").value = hotelActual.hotelArea

    print(mModifica, resultDiv)
}

function updateHotel(){

    let {name, nRooms, nFloors, hotelArea, resultDiv} = catchValues()
    const {message, mUpdate, notFound} = literals()


    let posicio = findPosition(name)

    if (posicio == -1) return print(notFound, resultDiv)

    let hotelActual = hotels[posicio]

    hotelActual.nRooms = nRooms
    hotelActual.nFloors = nFloors
    hotelActual.hotelArea = hotelArea

    print(mUpdate, resultDiv)

    document.getElementById("updateButton").style.display = "none";
    document.getElementById("createButton").style.display = "block";
    document.getElementById("seeButton").style.display = "block";
    document.getElementById("eliminateButton").style.display = "block";


}