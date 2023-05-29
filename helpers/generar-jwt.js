const jwt = require('jsonwebtoken');

const generarJWT = ( uid, expiresIn ) =>{
    return new Promise ( ( resolve,reject ) =>{
        const payload = { uid };
        //console.log({payload,expiresIn});
        jwt.sign( payload , process.env.SECRETORPRIVATEKEY,{
            expiresIn: Number(expiresIn)
        }, (err, token) => {
            if( err ){
                console.log(err);
                reject('No se pudo generar el token');
            } else {
                //console.log(token);
                resolve ( token );
            }
        })
    })
}
module.exports = {
    generarJWT
}