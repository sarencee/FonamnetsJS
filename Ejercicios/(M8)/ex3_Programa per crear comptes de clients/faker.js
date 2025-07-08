"use strict"

function crearFakeClient(){

    let dni = "123M"
    let firstName = "Donkey"
    let lastName = "Kong"
    
    
    const client1 = new Client (dni, firstName,  lastName)
    let acc1 = client1.addAccountClient("main")
    let acc2 = client1.addAccountClient("savings")


    console.log(client1)
    clients.push(client1)

    let dni2 = "345P"
    let firstName2 = "Mario"
    let lastName2 = "Bros"
    
    
    const client2 = new Client (dni2, firstName2,  lastName2)
    let acc3 = client2.addAccountClient("main")
    let acc4 = client2.addAccountClient("savings")


    console.log(client2)
    clients.push(client1)

    console.log(clients)

}

crearFakeClient()