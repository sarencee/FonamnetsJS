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