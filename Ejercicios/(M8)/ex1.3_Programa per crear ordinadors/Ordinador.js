"use strict"

class Ordinador{

    #marca
    #model  
    #processador
    #ram
    #discDur

    constructor (marca, model, processador, ram, discDur){
        this.#marca = marca
        this.#model = model
        this.#processador = processador
        this.#ram = ram
        this.#discDur = discDur
    }

    get marca () {return this.#marca}
    get model () {return this.#model}
    get processador () {return this.#processador}
    get ram () {return this.#ram}
    get discDur () {return this.#discDur}

    set processador (newValue){this.#processador = newValue}
    set discDur (newValue){this.#discDur = newValue}
    set ram (newValue){this.#ram = newValue}

    currentProgram(program){
        return `En aquest moment s'está executant ${program}.`
    }

    toString(){
        return `
        Marca: ${this.#marca}
        Model: ${this.#model}
        Processador: ${this.#processador}
        Ram: ${this.#ram}
        Disc dur: ${this.#discDur}
        `
    }
}