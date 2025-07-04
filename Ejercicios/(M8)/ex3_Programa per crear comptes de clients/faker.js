"use strict"

function crearFakeClient(){

    let dni1 = "123A"
    let firstName1 = "Donkey"
    let lastName1 = "Kong"

    
    
    const client1 = new Client(dni1, firstName1, lastName1)
    clients.push(client1)
    console.log(client1)
}

crearFakeClient()

function crearFakeAccount(){

    let name = "Acc1"

    const acc1 = new Account(name)

    
    clients[0].addAccount(acc1)

    console.log(clients)
}

crearFakeAccount()

//DB -> posicio client -> array account -> posicio account -> metode addBalance

clients[0].account[0].addBalance(15)

console.log(clients[0].account)