const { Router } = require('express');
const { check } = require('express-validator');
const { signup,login } = require('../controllers/auth');

const { validarCampos } = require('../middlewares/validar-campos');
const { existeEmail } = require('../middlewares/validar-users');

const router = Router();

router.post('/signup',[
    check('email','El correo es obligatorio').isEmail(),
    check('password','La constraseña es obligatoria').not().isEmpty(),
    existeEmail,
    validarCampos
], signup);
    
router.post('/login',[
    check('email','El correo es obligatorio').isEmail(),
    check('password','La constraseña es obligatoria').not().isEmpty(),
    validarCampos
], login);

module.exports = router;
