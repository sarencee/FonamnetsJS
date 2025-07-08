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
        message : 'Empty values.'
    },
    errAlreadySaved: {
        success: false,
        message: "Element already exist.",
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
    messUpdateBalance : {
        success: true,
        code : 200,
        message : `Balance Updated. Current balance: `
    },
    messAddAccount : {
        success: true,
        code : 200,
        message : `Account added.`
    },
 
}
