"use strict"

function createClient(){

    const {dni, firstName, lastName, resultDiv} = catchValuesClient()

    // if (valNum(dniClient)) return print(responses.errBadRequest.message, resultDiv)
    if (!validateClient(dni, firstName, lastName, resultDiv)) return
  
    console.log(responses.errAlreadySaved.code)

    const client = new Client(dni, firstName,lastName)
    // console.log(client)
    clients.push(client)
    console.log("Tipus de client guardat:", clients[clients.length - 1] instanceof Client)

    // console.log(clients)

    print(responses.messSave.message,resultDiv)

    console.log(responses.messSave.code)
    console.log(clients)

}

function eliminateClient(){
    const {dni, firstName, lastName, resultDiv} = catchValuesClient()

    validateClient(dni, firstName, lastName, resultDiv)

    let position = findPositionClient(dni, clients)

    if (position == -1) return print(responses.errNotFound.message, resultDiv)

    clients.splice(position, 1)

    console.log(clients)

    print( responses.messDelete.message, resultDiv)

}

function addAccount(){

    const {dni, resultDiv} = catchValuesClient()
    console.log(dni)
    const accName = document.getElementById("accountName").value
    const acc1 = new Account (accName)
        
    let position = findPositionClient(dni, clients)

    if (position == -1) return print(responses.errNotFound.message, resultDiv)

    let clientActual = clients[position]
    console.log(clientActual.toString())

    console.log(clientActual instanceof Client) // debe mostrar true

    console.log(clientActual)
    console.log(typeof clientActual.addAccountClient)
    console.log("Té addAccountClient?", typeof clientActual.addAccountClient)
  clientActual.addAccountClient(acc1)

    console.log(clientActual.toString())




}