"use strict"

class Ordinador{

    #marca
    #model
    #processador
    #ram
    #discDur
    #program

    constructor(marca, model, processador, ram, discDur, program){
        this.#marca = marca
        this.#model = model
        this.#processador = processador
        this.#ram = ram
        this.#discDur = discDur
        this.#program = program
    }

    get marca () {return this.#marca}
    get model() {return this.#model}
    get processador() {return this.#processador}
    get ram () {return this.#ram}
    get discDur () {return this.#discDur}
    get program () {return this.#program}
    
    set processador(newValue) {this.#processador = newValue}
    set ram (newValue) {this.#ram = newValue}
    set discDur (newValue) {this.#discDur = newValue}
    set program (newValue) {this.#program = newValue}

    currentProgram() {
    return  this.#program;
    }

    toString(){
        return`
            Marca : ${this.#marca}
            Model : ${this.#model}
            Processador : ${this.#processador}
            RAM : ${this.#ram}
            Disc dur : ${this.#discDur}
            `
     }
    
}