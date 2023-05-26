const { Router } = require('express');
const { storeRecipes,fetchRecipes } = require('../controllers/recipes');

const router = Router();

router.put('/', storeRecipes);
router.get('/', fetchRecipes);

module.exports = router;