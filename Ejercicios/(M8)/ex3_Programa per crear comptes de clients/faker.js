"use strict"

function crearFakeClient(){

    let dni1 = 123
    let firstName1 = "Donkey"
    let lastName1 = "Kong"
    
    const client1 = new Client(dni1, firstName1, lastName1)
    console.log(client1)
}

crearFakeClient()