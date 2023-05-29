const { response } = require("express");
const User = require("../models/user");

const existeEmail = async( req, res = response, next) =>{

    const { email } = req.body;

    const user = await User.findOne({email});

    if( user ){
        return res.status(500).json({
            msg: `El correo ${ email } ya existe`
        })
    }

    next();
}

module.exports = {
    existeEmail
}