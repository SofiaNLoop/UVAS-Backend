const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const {  login } = require('../Controllers/LoginController');
const { validateFields } = require('../middlewares/validateFields');

// Login User
router.post('/',
   [

      check('email', 'El email es obligatorio').isEmail(),
      check('password', 'La contraseña es obligatoria').not().isEmpty(),
      validateFields


   ],
   login
);


module.exports = router;