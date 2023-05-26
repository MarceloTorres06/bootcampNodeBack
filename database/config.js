const mongoose = require('mongoose');

const dbConenection = async() =>{
    try{
        await mongoose.connect( process.env.MONGODB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        } );

        console.log('Base de datos online');
    }
    catch (error){
        console.log(error);
        throw new Error('Error a la hora de conectar con la base de datos')
    }
}

module.exports = {
    dbConenection
}