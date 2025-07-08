"use strict"

class Client{

    #dni
    #firstName
    #lastName
    #accounts

    constructor(dni, firstName, lastName){
        this.#dni = dni
        this.#firstName = firstName
        this.#lastName = lastName
        this.#accounts = []
    }

    get dni (){ return this.#dni}
    get firstName (){ return this.#firstName}
    get lastName (){ return this.#lastName}
    get accounts (){ return this.#accounts} 

    set firstName(newValue) {this.#firstName = newValue}
    set lastName(newValue) {this.#lastName = newValue}
    set accounts(newValue) {this.#accounts = newValue}

    addAccountClient(account){

        this.accounts.push(account)
        return responses.messSave.message
    }
    
    toString(){
        
        return`
        DNI : ${this.dni}
        First Name : ${this.firstName}
        Last name : ${this.lastName}
        Accounts : ${this.accounts}
        `
    }
}