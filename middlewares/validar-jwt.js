const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


const validarJWT = async( req = request, res = response, next ) => {

    const token = req.query.auth;

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        const {uid} = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        // leer el usuario que corresponde al uid
        const user = await User.findById( uid );

        if( !user ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        }
        
        req.user = user;
        next();

    } catch (error) {
        console.log('Token no válido');
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}




module.exports = {
    validarJWT
}