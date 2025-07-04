"use strict"

function createClient(){

    const {dni, firstName, lastName, resultDiv} = catchValuesClient()

    const client = new Client(dni, firstName,lastName)

    console.log(client)

    clients.push(client)

    console.log(clients)


}