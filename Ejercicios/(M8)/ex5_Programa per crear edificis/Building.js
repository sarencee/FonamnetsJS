"use strict"

class Building{

    #name
    #nFloors
    #area

    static meterPerMinute = 5
    static timeFloorUp = 0.5
    static dayMonth = 30
    static salaryGuardMonth = 1300

    constructor (name, nFloors, area){

        this.#name = name
        this.#nFloors = nFloors
        this.#area = area
    }

    get name (){return this.#name}
    get nFloors (){return this.#nFloors}
    get area (){return this.#area}

    cleanBuilding(){

        const cleaningTime = (this.area / Building.meterPerMinute) + (this.nFloors -1) * Building.timeFloorUp
        const costMonth = cleaningTime * Building.dayMonth

        return {cleaningTime, costMonth}
    }

    calculateSurveilanceCost(meterPerGuard, plus){

        const guards = Math.ceil(this.area / meterPerGuard)
        const plusDanger = 500
        let costSurveilanceMonth = guards * Building.salaryGuardMonth

        if (plus == true) {
            costSurveilanceMonth += (plusDanger * guards)
        }

        return {guards, costSurveilanceMonth}
    }

    toString(){
        return`
        Nom : ${this.name}
        Número de pisos: ${this.nFloors}
        Àrea: ${this.area}m2
        Cost neteja: ${this.cleanBuilding().costMonth}€`
    }
}