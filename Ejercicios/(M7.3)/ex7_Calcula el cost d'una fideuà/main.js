"use strict"

// Un grup d’amics ha quedat per fer una fideuà.

// Els ingredients principals seran: fideus, gambes, i calamars.

// Saben que per cada quatre persones han d’utilitzar 
// mig quilo de fideus, 400 grams de calamars i 200 grams de gambes.

// S’ha de fer un programa que demani per pantalla el preu per quilo de 
// cada ingredient i el nombre d’amics que seran per dinar. El programa ha de
//  calcular les quantitats 
// necessàries de cada ingredient, el preu per persona i el preu final de la fideuà.

const literals = {
    mess1 : "",
    mess2 : "El preu de la fideua és: "

}

function calculateQuantity(gramos, friends){

    const quantityKg = ((gramos * friends) / 1000).toFixed(2)

    return quantityKg
}

function pricePerPerson(kg, priceKg, numberFriends){

    const pricePerPerson = (kg * priceKg )/ numberFriends

    return pricePerPerson
}

function main(){

    const {priceNoodles, priceSquid, priceShrimp, numberFriends, resultDiv1, resultDiv2} = catchValues()
    console.log(resultDiv1)
    console.log(resultDiv2)
    let mess1 = ""
    let mess2 = "El preu per persona és:"
    let mess3 = "El preu de la fideua total és:"
    let err1 = ""

    const shrimpKg = calculateQuantity(200, numberFriends)
    const noodlesKg = calculateQuantity(500, numberFriends)
    const squidKg = calculateQuantity(400, numberFriends)

    console.log(shrimpKg)
    console.log(noodlesKg)
    console.log(squidKg)

    let pricePersonShrimp = pricePerPerson(shrimpKg, priceShrimp, numberFriends)
    let pricePersonNoodle = pricePerPerson(noodlesKg, priceNoodles, numberFriends)
    let pricePersonSquid = pricePerPerson(squidKg, priceSquid, numberFriends)

    console.log(pricePersonShrimp)

    let  pricePerPersonTotal = pricePersonNoodle + pricePersonShrimp + pricePersonSquid

    let  priceTotalFideua = (pricePerPersonTotal * numberFriends).toFixed(2)

    print(mess1, resultDiv1)
    print(mess1, resultDiv2)
    print(mess2 += `${pricePerPersonTotal}€`, resultDiv1)

    
 print(mess3 += `${priceTotalFideua}€`, resultDiv2)




}