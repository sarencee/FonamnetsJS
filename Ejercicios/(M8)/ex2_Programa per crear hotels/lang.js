"use strict"

const responses = {
    
    errBadRequest: {
        success: false,
        code : 400,
        message : 'Invalid values'
    },
    errNotFound: {
        success: false,
        code : 404,
        message : 'Not found'
    },
    errAlreadySave: {
        success: false,
        message: "Element already exist",
        code: 409
    },
    messSave : {
        success: true,
        code : 200,
        message : 'Saved on DB'
    },
    messDelete : {
        success: true,
        code : 200,
        message : 'Restaurant deleted'
    },
    messUpdate : {
        success: true,
        code : 200,
        message : 'Restaurant Update'
    },
 
}

function literals(){

    return{
        message : "",
        mFound : "This hotel already exists.",
        mName : "Enter a valid name.",
        mCreated : "Hotel created.",
        mErased : "Hotel erased.",
        mModifica : "Modify hotel data.",
        mUpdate : "Hotel updated.",
        notFound : "Hotel not found.",
        err1 : "Enter a text.",
        err2 : "Enter a number.",
        err3 : "Fill all fields.",
        err4 : "Enter hotel name.",
    }
}