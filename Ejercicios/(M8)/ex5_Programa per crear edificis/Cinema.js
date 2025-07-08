"use strict"

class Cinema extends Building{

    #capacity
    #guards
    #surveilanceCost

    static meterPerGuardCinema = 3000 

    constructor (name, nFloor, area, capacity){
        super(name, nFloor, area)
        this.#capacity = capacity
        this.#guards = super.calculateSurveilanceCost(Cinema.meterPerGuardCinema, false).guards
        this.#surveilanceCost = super.calculateSurveilanceCost(Cinema.meterPerGuardCinema, false).costSurveilanceMonth
    }

    get capacity(){return this.#capacity}
    get surveilanceCost(){return this.#surveilanceCost}
    get guards(){return this.#guards}


    //Call this with html input parameters: number of people & tcicket price
    screenMovie(nPeople, ticketPrice){

        if (nPeople > this.capacity){
            nPeople = this.capacity
        }
        const revenue = nPeople * ticketPrice
        return `S’han recaptat ${revenue.toFixed(2)} euros`
    }

    toString(){
        return`
        ${super.toString()}
        Número de vigilants: ${this.guards}
        Cost de vigilància: ${this.surveilanceCost}€
        `
    }
}