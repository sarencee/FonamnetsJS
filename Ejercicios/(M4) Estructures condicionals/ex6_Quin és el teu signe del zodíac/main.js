"use strict"

function calcula(){

    let resultDiv = document.getElementById("result");
    let day = parseInt(document.getElementById("day").value);
   
    let month = parseInt(document.getElementById("month").value, 10);
  
    let zodiac = "Hello";
    let message = " ";

    let err1 = "Escriu un número al camp de dia de naixement."
    let err2 = "Selecciona un mes i introdeix un numero al camp pel dia de naixement."

    if (isNaN(day)) return resultDiv.innerHTML = err1;
    if (!day || !month) return resultDiv.innerHTML = err2;

    switch (month){
        case 1: day <= 19 ? zodiac ="Capricorn-Capricornio" : zodiac = "Aquari-Acuario";
        break
        case 2: zodiac = day <=20 ? "Aquari-Acuario" : "Peixos-Piscis";
        break
        case 2: zodiac = day <=20 ? "Aquari-Acuario" : "Peixos-Piscis";
        break
        case 3: zodiac = day <=20 ? "Peixos-Piscis" : "Àries-Aries";
        break
        case 4: zodiac = day <=19 ? "Àries-Aries" : "Taure-Tauro";
        break
        case 5: zodiac = day <=20 ? "Taure-Tauro" : "Bessons-Géminis";
        break
        case 6: zodiac = day <=20 ? "Bessons-Géminis" : "Cranc-Cáncer";
        break
        case 7: zodiac = day <=22 ? "Cranc-Cáncer" : "Lleó-Leo";
        break
        case 8: zodiac = day <=22 ? "Lleó-Leo" : "Verge-Virgo";
        break
        case 9: zodiac = day <=22 ? "Verge-Virgo" : "Balança-Libra";
        break
        case 10: zodiac = day <=22 ? "Balança-Libra" : "Escorpí-Escorpión";
        break
        case 11: zodiac = day <=21 ? "Escorpí-Escorpión" : "Sagitari-Sagitario";
        break
        case 12: zodiac = day <=21 ? "Sagitari-Sagitario" : "Capricorn-Capricornio";
        break
        default: zodiac = "Hi ha hagut un error."
    }
    console.log(zodiac)
    message = `Ets ${zodiac}!`;
    resultDiv.innerHTML = message;
}   