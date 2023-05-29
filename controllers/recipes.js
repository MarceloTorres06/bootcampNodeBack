//# INI - Controladores para app Angular
const { response, request } = require('express');
const Recipe = require('../models/recipe');
const bcryptjs = require('bcryptjs');

const storeRecipes = async (req = request, res = response) => {
    try {        

        const recipes = eval( req.body );

        await Recipe.deleteMany({});

        recipes.forEach (async element => {
            const { name,description,ingredients,imagePath,isFavorite } = element;
            const recetaNueva = new Recipe({name,description,ingredients,imagePath,isFavorite});
            await recetaNueva.save();
        });

        res.status(200).json({
            msg: "Store recipe ok"
        });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            msg: 'Hable con el administrador'
        });

    }
}

const fetchRecipes = async (req, res = response) => {
        
    try {

        const recipes = await Recipe.find({});
        res.status(200).json(recipes);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }    
}
//# FIN - Controladores para app Angular

module.exports = {
    storeRecipes,
    fetchRecipes
}