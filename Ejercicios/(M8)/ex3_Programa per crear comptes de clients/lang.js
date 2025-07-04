"use strict"

const responses = {
    
    errBadRequest: {
        success: false,
        code : 400,
        message : 'Invalid values.'
    },
    errNotFound: {
        success: false,
        code : 404,
        message : 'Not found.'
    },
    errEmpyValues : {
        success: false,
        code : 222,
        message : 'Empty values.'
    },
    errAlreadySaved: {
        success: false,
        message: "Element already exist",
        code: 409
    },
    messSave : {
        success: true,
        code : 200,
        message : 'Saved on DB.'
    },
    messDelete : {
        success: true,
        code : 200,
        message : 'Client deleted.'
    },
    messUpdate : {
        success: true,
        code : 200,
        message : 'Restaurant Updated.'
    },
 
}
