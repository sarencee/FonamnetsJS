"use strict"

function actualizarStock(){
    
    for (let i = 0; i < ventas.length; i++){
        let idVentas = ventas[i][0]
        let quantitySold = ventas[i][1]

        for (let j = 0; j < productos.length; j++){
            if (productos[j][0] == idVentas) productos[j][3] = productos[j][3] - quantitySold;

        }
    }
    
    return productos

}

function ventasPorDia(){

    let ventasPorDia = []
     
    for (let i = 0; i < ventas.length; i++){
         
        let idVentas = ventas[i][0]
        let cantidadProductosVendidos = ventas [i][1]
        let dia = ventas [i][2]
        
        for (let j = 0; j < ventas.length; j++){


        }
    }

}

// Productos [id, nombre, precio, stock]
const productos = [
   [101, 'Camiseta', 25, 50],
   [102, 'Pantalón', 45, 30],
   [103, 'Zapatos', 80, 20],
   [104, 'Gorra', 15, 40]
];

//    Array 2: Ventas [idProducto, cantidad, fecha(día)]
const ventas = [
    [101, 2, 1],
    [102, 1, 1],
    [103, 1, 2],
    [101, 3, 3],
    [104, 5, 3]
]

function comprovar(){
    
    console.log(actualizarStock())

}