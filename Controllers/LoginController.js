const User = require("../Models/User");
const bcrypt = require('bcryptjs');
const { generateJWT } = require("../helpers/jwt");

// Login User
exports.login = async( req, res = response ) => {

    const { email, password } = req.body;
 
    try {
 
       // validate email
       const userDB = await User.findOne({email});
       if ( !userDB ) {
          return res.status(404).json({
             ok: false,
             msg: 'Email no valido'
          })
       }
 
       const validatePass = bcrypt.compareSync( password, userDB.password );
       if ( !validatePass ) {
          return res.status(400).json({
             ok: false,
             msg: 'Contraseña no valida'
          });
       }
 
       // generate Token
       const token = await generateJWT( userDB._id );
 
 
 
       res.json({
          ok: true,
          token
       });
 
 
    } catch (error) {
 
       console.log(error);
       res.status(500).json({
          ok: false,
          msg: 'Error'
       });
 
    }
 
 
 }