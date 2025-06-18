"use strcit"

const print = (message, elementHTML) => elementHTML.innerHTML = message

const val = value => !value

function Fibonacci(userNumInput){
    let arrFib = [0,1]
    
    for (let i = 2; i < userNumInput; i++){
        let numFib = (arrFib[arrFib.length - 1]) + (arrFib[arrFib.length -2])
        arrFib.push(numFib)
    }
    
    return arrFib
}

function catchValues(){

   return{
    num : parseInt(document.getElementById("num").value),   
    resultDiv : document.getElementById("result")
   } 

}

const literals = {

    message : "",
    err1 : "Introdueix un número.",
}

function showSequence(){

    const { num , resultDiv } = catchValues()

    if (val(num)) return print(literals.err1, resultDiv)

    let sequencia = Fibonacci(num)

    print(literals.message = `Els números de la seqüència fins a ${num} són: ${sequencia}.` , resultDiv)

}