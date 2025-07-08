"use strict"

class Hotel extends Building{

    static meterPerGuardHotel = 1000

    constructor(name, nFloors, area){
        super(name, nFloors, area)
    }


    toString(){
        return `
        ${super.toString()}
        Número de vigilants: ${super.calculateSurveilanceCost(Hotel.meterPerGuardHotel, true).guards}
        Cost vigilància: ${super.calculateSurveilanceCost(Hotel.meterPerGuardHotel, true).costSurveilanceMonth}€
        `
    }
}