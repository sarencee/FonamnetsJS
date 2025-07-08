"use strict"

class Hotel extends Building{

    static meterPerGuardHotel = 1000

    constructor(name, nFloors, area){
        super(name, nFloors, area)
    }


    toString(){
        return `
        ${super.toString()}
        Cost vigilància: ${super.calculateSurveilanceCost(Hotel.meterPerGuardHotel, true).costSurveilanceMonth}€
        `
    }
}