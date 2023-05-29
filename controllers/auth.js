const { response } = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');

const signup = async (req, res = response) => {
    try {
        //Encrypt password
        const {email,password,returnSecureToken} = req.body;
        const user = new User( {email,password} );
        
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync( password, salt);

        //Generate JWT
        const token = returnSecureToken ? await generarJWT( user._id, user.expiresIn ) : '';

        user.idToken = token;
        //Save to DB

        await user.save();
        
        res.status(200).json({
            email: user.email,
            localId: user.localId,
            idToken: user.idToken,
            expiresIn: user.expiresIn
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

const login = async (req, res = response) => {
    try {
        const {email,password,returnSecureToken} = req.body;
        const user = await User.findOne({email});

        if( !user){
            return res.status(400).json({
                msg: 'Usuario/password no correctos - correo'
            })
        }

        const validPassword = bcryptjs.compareSync(password, user.password);

        if( !validPassword ){
            return res.status(400).json({
                msg: 'Usuario/password no correctos - password'
            })
        }

        const token = returnSecureToken ? await generarJWT( user._id, user.expiresIn ) : '';

        user.idToken = token;

        await user.save();

        res.status(200).json({
            email: user.email,
            localId: user.localId,
            idToken: token,
            expiresIn: user.expiresIn
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    signup,
    login
}