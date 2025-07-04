"use strict"

function createClient(){

    const {dni, firstName, lastName, resultDiv} = catchValuesClient()

    // if (valNum(dni)) return print(responses.errBadRequest.message, resultDiv)
    if (!validateClient(dni, firstName, lastName, resultDiv)) return
  
    console.log(responses.errAlreadySaved.code)

    const client = new Client(dni, firstName,lastName)
    // console.log(client)
    clients.push(client)
    // console.log(clients)

    print(responses.messSave.message,resultDiv)

    console.log(responses.messSave.code)
    console.log(clients)

}

function eliminateClient(){
    const {dni, firstName, lastName, resultDiv} = catchValuesClient()

    validateClient(dni, firstName, lastName, resultDiv)

    let position = findPosition(dni)

    if (position == -1) return print(responses.errNotFound.message, resultDiv)

    clients.splice(position, 1)

    console.log(clients)

    print( responses.messDelete.message, resultDiv)

}

