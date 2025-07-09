"use strict"


class Scientist extends Staff{

    #specialty
    #investigations

    constructor (dni, name, age, specialty){
        super(dni, name, age)
        this.#specialty = specialty
        this.#investigations = []
    }

    get specialty() {return this.#specialty}
    get investigations() {return this.#investigations}

    createInvestigation(invName, field){
        let newInvestigation = {invName, field}

        this.investigations.push(newInvestigation)

        return newInvestigation
    }

      toString(){

        let invArr = ""

        for (let i = 0; i < this.investigations.length; i++){
            invArr += `${this.investigations[i].name}, ${this.investigations[i].field}`
        }
        return`
        ${super.toString()}
        Especialitat: ${this.specialty}
        Investigacións: ${this.invArr} 
        `
        //COM retornar el array en string?
    }
}