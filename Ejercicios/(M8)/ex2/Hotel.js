"use strict"

class Hotel{

    #name
    #nRooms
    #nFloors
    #hotelArea
    #cost = 0

    static roomPerWorker = 20

    constructor (name, nRooms, nFloors, hotelArea){
        this.#name = name
        this.#nRooms = nRooms
        this.#nFloors = nFloors
        this.#hotelArea =hotelArea
    }

    get name () {return this.#name}
    get nRooms () {return this.#nRooms}
    get nFloors () {return this.#nFloors}
    get hotelArea () {return this.#hotelArea}
    get cost () {return this.#cost}

    set name (newValue) {this.#name = newValue}
    set nRooms (newValue) {this.#nRooms = newValue}
    set nFloors (newValue) {this.#nFloors = newValue}
    set hotelArea (newValue) {this.#hotelArea = newValue}

    calcularManteniment(){
       
        let workers =  Math.ceil (this.#nRooms / Hotel.roomPerWorker)
        this.#cost = workers * 1500

        return this.#cost
    }

    toString(){
        return `
        Hotel name: ${this.#name}
        Number of rooms: ${this.#nRooms}
        Number of floors: ${this.#nFloors}
        Hotel area: ${this.#hotelArea}
        Hotel costs: ${this.calcularManteniment()}€
        `
    }
}