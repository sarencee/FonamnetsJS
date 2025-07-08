"use strict"

class Hotel extends Building{

    #guards
    #surveilanceCost

    static meterPerGuardHotel = 1000

    constructor(name, nFloors, area){
        super(name, nFloors, area)
        this.#guards = super.calculateSurveilanceCost(Hotel.meterPerGuardHotel, true).guards
        this.#surveilanceCost = super.calculateSurveilanceCost(Hotel.meterPerGuardHotel, true).costSurveilanceMonth
    }

    get guards(){return this.#guards}
    get surveilanceCost(){return this.#surveilanceCost}

    toString(){
        return `
        ${super.toString()}
        Número de vigilants: ${this.guards}
        Cost vigilància: ${this.surveilanceCost}€
        `
    }
}