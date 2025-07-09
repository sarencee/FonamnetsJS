"use strict"

class Staff{
    
    #dni
    #name
    #age

    constructor (dni, name, age){
        this.#dni = dni
        this.#name = name
        this.#age = age
    }

    get dni() {return this.#dni}
    get name() {return this.#name}
    get age() {return this.#age}

    toString(){
        return `
        DNI: ${this.dni}
        Nom: ${this.name}
        Edat: ${this.age}`
    }
}