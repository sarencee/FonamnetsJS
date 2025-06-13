"use strcit"


function validate(a){
    return isNaN(a)
}

function print(a, b){
    a.innerHTML = b
}

function calcularNota(){

    const resultDiv = document.getElementById("result");
    const num1Input = parseFloat(document.getElementById("num1").value);
    const num2Input = parseFloat(document.getElementById("num2").value);
    const num3Input = parseFloat(document.getElementById("num3").value);

    const err1 = "Introdueix un número a tots els camps de text."

    if (validate(num1Input) || validate(num2Input) || validate(num3Input)) return print(resultDiv, err1)
    
    let message = ""

    function mitjana(a, b, c){
        return (a + b + c) / 3
    }

    let mitjanaNotes = mitjana(num1Input, num2Input, num3Input)
    console.log(mitjanaNotes)

    if (mitjanaNotes < 5){
        message = "No has superat el curs. Has de recuperar."
    } else if (mitjanaNotes >=5 && mitjanaNotes <= 7){
        message = "Enhorabona! Has aprovat, però hauries de continuar practicant."
    } else message = "Enhorabona! Has superat el curs! Passa ja al següent nivell!"

    print(resultDiv, message)
}