"use strict"

function tradueix(){

    let resultDiv = document.getElementById("result");
    let numberInput = parseInt(document.getElementById("number").value);

    let unitats = parseInt(numberInput % 10);
    let desenes = parseInt(numberInput / 10);
    
    let textUnitats = ""
    let textDesenes = ""
    let textEspecials = ""

    let message = "Aquest nombre és "

    let err1 = "Introdueix un nombre entre 0 i 99."

    // console.log("Unitats" + unitats)
    // console.log("Desenes" + desenes)

    if (isNaN(numberInput) || numberInput < 0 || numberInput > 99) return resultDiv.innerHTML = err1;

    // console.log(`${message}${textUnitats}`)

    if (desenes == 1){
        switch(unitats){
            case 0: textEspecials = "deu"; break;
            case 1: textEspecials = "onze"; break;
            case 2: textEspecials = "dotze"; break;
        } 
    } else if (desenes == 0){
        switch(unitats){
            case 0: textUnitats = "zero"; break;
            case 1: textUnitats = "u"; break;
            case 2: textUnitats = "dos"; break;
            case 3: textUnitats = "tres"; break;
        }
    } else {
        switch(desenes){
            case 2: textDesenes ="vint"; break;
            case 3: textDesenes ="trenta"; break;
            case 4: textDesenes ="quaranta"; break;
            case 5: textDesenes ="cinquanta"; break;
            case 6: textDesenes ="seixanta"; break;
            case 7: textDesenes ="setanta"; break;
            case 8: textDesenes ="vuitanta"; break;
            case 9: textDesenes ="noranta"; break;
            default: "Error en desdenes"
        } 
        
        switch(unitats){
            case 0: textUnitats = ""; break;
            case 1: textUnitats = "-u"; break;
            case 2: textUnitats = "-dos"; break;
            case 3: textUnitats = "-tres"; break;
            case 4: textUnitats = "-quatre"; break;
            case 5: textUnitats = "-cinc"; break;
            case 6: textUnitats = "-sis"; break;
            case 7: textUnitats = "-set"; break;
            case 8: textUnitats = "-vuit"; break;
            case 9: textUnitats = "-nou"; break;
        } 
    }
 
    console.log(textUnitats)
    console.log(textDesenes)
    console.log(textEspecials)
    
    if (desenes == 1){
        resultDiv.innerHTML = `${message}${textEspecials}.`
    
    } else if (textDesenes == "vint"){
        resultDiv.innerHTML = `${message}${textDesenes}-i${textUnitats}.`
    } else {
        resultDiv.innerHTML = `${message}${textDesenes}${textUnitats}.`
    }
}