"use strict"

class Astronaut extends Staff{

    #weight
    #habilities
    #forgottenHabilities
    #misions

    constructor(dni, name, age, weight){
        super(dni, name, age)
        this.#weight = weight
        this.#habilities = []
        this.#forgottenHabilities = []
        this.#misions = []
    }

    get weight(){return this.#weight}
    get habilities(){return this.#habilities}
    get forgottenHabilities (){return this.#forgottenHabilities}
    get misions(){return this.#misions}

    addHability(hability){

        if(this.habilities.length == 5) return false

        this.habilities.push(hability)
        return true
    }

    //Forget habiñity, find position by name

    toString(){
        return`
        ${super.toString()}
        Pes: ${this.weight}
        Habilitats: ${this.habilities}
        Habilitats oblidades: ${this.forgottenHabilities}
        Misións: ${this.misions}
        `
        
    }

}