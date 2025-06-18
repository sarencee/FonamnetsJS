"use strict"

const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value

function catchValues(){

   return{
    num : parseInt(document.getElementById("num").value),   
    resultDiv : document.getElementById("result")
   } 

}

function triangle(num){
    
    let message = ""

    for (let i = num; i > 0; i--){ //i = 4
        for (let j = i; j > 0; j--){
            message += "*"
        }
        message += "<br>"
    }

    return message
}

function dibuixar(){

    const {num,  resultDiv} = catchValues()

    let message = triangle(num)

    print(message, resultDiv)


}