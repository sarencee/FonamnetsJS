"use strict"

function createClient(){

    const {dni, firstName, lastName, resultDiv} = catchValuesClient()

    if (!validateClient(dni, firstName, lastName, resultDiv)) return

    const client = new Client(dni, firstName,lastName)

    clients.push(client)

    print(responses.messSave.message,resultDiv)

    console.log(clients)

}

function eliminateClient(){
    const {dni, resultDiv} = catchValuesClient()

    if (validate(dni)) return print(responses.errEmpyValues.message, resultDiv)

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
    
    if (!validateAcc(dni, accName, resultDiv)) return   

    const acc1 = new Account (accName)

    let positionClient = findPositionClient(dni, clients)

    if (positionClient == -1) return print(responses.errNotFound.message, resultDiv)

    let clientActual = clients[positionClient]
  
    clientActual.addAccountClient(acc1)

    print(responses.messAddAccount.message, resultDiv)

}

function addBalance(){

    const {dni, accountName, amount, resultDiv} = catchValuesClient()

    if (!validateAcc(dni, accountName, resultDiv)) return   

    let positionClient = findPositionClient(dni, clients)

    if (positionClient == -1) return print(responses.errNotFound.message, resultDiv)

    let clientActual = clients[positionClient]

    let arrAccClientActual = clientActual.accounts

    let positionAcc = findPositionAccount(accountName, arrAccClientActual)

    console.log(positionAcc)

    if (positionAcc == -1) return print("Account not found.", resultDiv)

    let accActual = arrAccClientActual[positionAcc]

    if (validate(amount)) return print("Please, intoduce amount.", resultDiv)

    accActual.addBalance(amount)

    console.log(accActual)

    print(`Amount added. Current balance: ${accActual.balance.toFixed(2)}€.`, resultDiv)

}

function withdrawBalance(){

    const {dni, accountName, amount, resultDiv} = catchValuesClient()

    if (!validateAcc(dni, accountName, resultDiv)) return   

    let positionClient = findPositionClient(dni, clients)

    if (positionClient == -1) return print(responses.errNotFound.message, resultDiv)

    let clientActual = clients[positionClient]

    let arrAccClientActual = clientActual.accounts

    let positionAcc = findPositionAccount(accountName, arrAccClientActual)

    console.log(positionAcc)

    if (positionAcc == -1) return print("Account not found.", resultDiv)

    let accActual = arrAccClientActual[positionAcc]

    if (validate(amount)) return print("Please, intoduce amount.", resultDiv)
        
    if(accActual.balance < amount) return print("Insuficient funds.", resultDiv)

    accActual.withdrawBalance(amount)

    console.log(accActual)

    print(`Amount withdrawn. Current balance: ${accActual.balance.toFixed(2)}€.`, resultDiv)

}