"use strict"

class Ordinador{

    static count = 1
    static prefix = "ordinador "

    #model
    #marca
    #processador
    #ram
    #discDur
    #id

    constructor(model, marca, processador, ram, discDur){

        this.#id = Ordinador.prefix + Ordinador.count++
        this.#model = model
        this.#marca = marca
        this.#processador = processador
        this.#ram = ram
        this.#discDur = discDur

    }

    get id() { return this.#id}
    get model() { return this.#model}
    get marca() { return this.#marca}
    get processador() { return this.#processador}
    get ram() { return this.#ram}
    get discDur() { return this.#discDur}

    set processador(newValue) { return this.#processador = newValue}
    set ram(newValue) { return this.#ram = newValue}
    set discDur(newValue) { return this.#discDur = newValue}

    currentProgram(programa) {
        return `En aquest moment s'esta exectunatn ${programa}`;
    }

    toString(){
        return `
        id : ${this.id}
        model : ${this.model}
        marca : ${this.marca}
        processador : ${this.processador}
        ram : ${this.ram}
        disc dur : ${this.discDur}
        `
    }



}