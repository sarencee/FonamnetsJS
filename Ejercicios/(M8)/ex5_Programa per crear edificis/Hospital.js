"use strict"

class Hospital extends Building{

    #patients
    #guards
    #surveilanceCost

    static mealsPerDay = 3
    static meterPerGuardHospital = 1000

    constructor (name, nFloor, area, patients){
        super(name, nFloor, area)
        this.#patients = patients
        this.#guards = super.calculateSurveilanceCost(Hospital.meterPerGuardHospital, false).guards
        this.#surveilanceCost = super.calculateSurveilanceCost(Hospital.meterPerGuardHospital, false).costSurveilanceMonth
    }

    get patients() {return this.#patients}
    get surveilanceCost(){return this.#surveilanceCost}
    get guards(){return this.#guards}

    set patients(newValue){ this.#patients = newValue}


    giveDinner(){
       const daylyRations =  Hospital.mealsPerDay * this.patients
        return `S’estan repartint ${daylyRations} racions.`
    }
    
    
    toString(){
        return`
        ${super.toString()}
        Número de vigilants: ${this.guards}
        Cost de vigilància: ${this.surveilanceCost}€
        Número de pacients: ${this.patients}
        ${this.giveDinner()}
        `
    }
}