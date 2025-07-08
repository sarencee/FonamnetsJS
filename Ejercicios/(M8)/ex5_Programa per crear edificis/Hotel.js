"use strict"

class Hotel extends Building{

    #guards
    #surveilanceCost
    #rooms

    static meterPerGuardHotel = 1000
    static roomPerWorker = 20
    static daysMonth = 30
    static workerSalary = 1000

    constructor(name, nFloors, area, rooms){
        super(name, nFloors, area)
        this.#rooms = rooms
        this.#guards = super.calculateSurveilanceCost(Hotel.meterPerGuardHotel, true).guards
        this.#surveilanceCost = super.calculateSurveilanceCost(Hotel.meterPerGuardHotel, true).costSurveilanceMonth
    }

    get guards(){return this.#guards}
    get surveilanceCost(){return this.#surveilanceCost}
    get rooms(){return this.#rooms}

    roomService(){
        const workers = Math.ceil(this.rooms /Hotel.roomPerWorker)
        const roomServiceCost = workers * Hotel.workerSalary
        return {workers, roomServiceCost}
    }

    toString(){
        return `
        ${super.toString()}
        Número de treballadors servei: ${this.roomService().workers}
        Cost de servei d'habitacións per mes: ${this.roomService().roomServiceCost}€
        Número de vigilants: ${this.guards}
        Cost vigilància: ${this.surveilanceCost}€
        `
    }
}