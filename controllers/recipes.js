//# INI - Controladores para app Angular
const storeRecipes = async (req, res = response) => {
        
    try {        
        
        res.status(200).json({
            msg: "Store recipe ok"
        });
    } catch (error) {
        
    }
}

const fetchRecipes = async (req = request, res = response) => {
        
    try {
        
        res.status(200).json(recipes);
    } catch (error) {
        
    }    
}
//# FIN - Controladores para app Angular

module.exports = {
    storeRecipes,
    fetchRecipes
}