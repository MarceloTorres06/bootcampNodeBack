const { Router } = require('express');
const { storeRecipes,fetchRecipes } = require('../controllers/recipes');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.put('/recipes?:auth',[
    validarJWT
], storeRecipes);

router.get('/recipes?:auth',[
    validarJWT
],fetchRecipes);

module.exports = router;