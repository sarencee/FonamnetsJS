"use strict"

class Mission {

    #id
    #finished
    #name
    #lvl

    constructor(id, finished, name, lvl ){

        this.#id = `M-${id}`
        this.#finished = finished
        this.#name = name
        this.#lvl = lvl
    }
    
    get id(){return this.#id}
    get finished(){return this.#finished}
    get name(){return this.#name}
    get lvl(){return this.#lvl}

    //ADD STAFF?

    addAstronaut(astDni){
        if (astDni.habilities.length < this.lvl) return false
        astDni.misions.push(this.id)
        return true
    }

    toString(){
        return`
        Id missió: ${this.id}
        Finished: ${this.finished}
        Nom missió: ${this.name}
        Nivell: ${this.lvl}
        `
    }
}