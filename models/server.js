const express = require('express');
const cors = require('cors');
const { dbConenection } = require('../database/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.authPath    = '/api/auth';
        this.recipesPath = '/api/recipes';

        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB(){
        await dbConenection();
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.recipesPath, require('../routes/recipes'));
    }

    listen(){
        this.app.listen( this.port ,() => {
            console.log('servidor corriendo en puerto', this.port);
        })
    }

}

module.exports = Server;