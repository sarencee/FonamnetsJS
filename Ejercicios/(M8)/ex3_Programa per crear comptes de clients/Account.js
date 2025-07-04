"use strict"

class Account{

    #name
    #balance
    
    constructor(name){
        this.#name = name
        this.#balance = 0
    }

    get name(){return this.#name}
    get balance(){return this.#balance}



    addBalance(num){

        this.#balance += num
        return this.#balance
    }

    withdrawBalance(num){

        if (this.#balance < num) return responses.errBadRequest.message
        this.#balance -= num
        return this.#balance
    }
}