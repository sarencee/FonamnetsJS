"use strcit"

const print = (message, elementHTML) => elementHTML.innerHTML = message

const validate = value => !value
const valNum = num => isNaN(num) // true
const valString = str => !isNaN(str) // true

function literals(){

    return{
        message : "",
        err1 : "Enter a number.",
        err2 : "Fill all fields.",
        err3 : "Enter hotel name.",
    }
}
function catchValues(){

   return{
    side1 : (parseFloat(document.getElementById("side1").value)).toFixed(2),   
    base : document.getElementById("base").value,   
    heigth : document.getElementById("heigth").value,   
    radius : document.getElementById("radius").value,   
    option : document.getElementById("option").value,   
    resultDiv : document.getElementById("result"),
   } 

}

function squareArea(){

    const {side1, resultDiv} = catchValues()
    let {message, err1} = literals()

    document.getElementById("section-quadrat").style.display = "block"
    document.getElementById("section-triangle-rectangle").style.display = "none"
    document.getElementById("section-circle").style.display = "none"

    if (valNum(side1) || validate(side1)) return print(err1,resultDiv)
    
    let squareAreaResult = side1 * side1


    return print (message =`L'àrea del quadrat es: ${squareAreaResult}`,resultDiv)

}

function triangleRectangleArea(){

    const {base, heigth, option, resultDiv} = catchValues()
    let {message, err1} = literals()


    document.getElementById("section-triangle-rectangle").style.display = "block"
    document.getElementById("section-circle").style.display = "none"
    document.getElementById("section-quadrat").style.display = "none"

    if (valNum(base) || valNum(heigth) || validate(base) || validate(heigth)) return print(err1,resultDiv)
        
    let areaResult = 0

    if (option == "2"){
        areaResult = base * heigth / 2
        message = `L'àrea del triangle és: ${areaResult}`

    } else if (option == "3"){
        areaResult = base * heigth
        message = `L'àrea del rectangle és: ${areaResult}`

    }
    
    
    return print (message,resultDiv)

}

function circleArea(){

    const {radius, resultDiv} = catchValues()
    let {message, err1} = literals()

    document.getElementById("section-circle").style.display = "block"
    document.getElementById("section-triangle-rectangle").style.display = "none"
    document.getElementById("section-quadrat").style.display = "none"

    if (valNum(radius) || valNum(radius)) return print(err1,resultDiv)
        
    let areaResult = (Math.PI * radius**2).toFixed(2)

    return print (message =`L'àrea del cercle es: ${areaResult}`,resultDiv)

}

function main(){

    const {option, resultDiv} = catchValues()
    console.log(option)

    switch(option){
        case "1": 
        squareArea()
        break;
        case "2":
        triangleRectangleArea()
        break
        case "3":
        triangleRectangleArea()
        break
        case "4":
        circleArea()
        break
    }
}