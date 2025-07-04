"use strict"

class Client{

    #dni
    #firstName
    #lastName
    #account

    constructor(dni, firstName, lastName){
        this.#dni = dni
        this.#firstName = firstName
        this.#lastName = lastName
        this.#account = []
    }

    get dni (){ return this.#dni}
    get firstName (){ return this.#firstName}
    get lastName (){ return this.#lastName}
    get account (){ return this.#account} 

    set firstName(newValue) {this.#firstName = newValue}
    set lastName(newValue) {this.#lastName = newValue}
    set account(newValue) {this.#account = newValue}

    addAccount(account){

        this.#account.push(account)
        return responses.messSave.message
    }
    
    toString(){
        
        return`
        DNI : ${this.#dni}
        First Name : ${this.#firstName}
        Last name : ${this.#lastName}
        Accounts : ${this.#account}
        `
    }
}