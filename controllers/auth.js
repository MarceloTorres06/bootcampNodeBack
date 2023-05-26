const signup = async (req, res = response) => {
    try {
        //Encrypt password
        
        //Generate JWT
        
        //Save to DB
        
        res.status(200).json({
            email: user.email,
            localId: user.localId,
            idToken: user.idToken,
            expiresIn: user.expiresIn
        })

    } catch (error) {
        
    }
}

const login = async (req, res = response) => {
    try {
        
        res.status(200).json({
            email: user.email,
            localId: user.localId,
            idToken: token,
            expiresIn: user.expiresIn
        })
    } catch (error) {
        
    }
}

module.exports = {
    signup,
    login
}