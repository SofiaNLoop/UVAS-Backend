const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


// Register
exports.CreateUser = async(req, res) => {

    try {
        let newUser;
        newUser = new User(req.body);
        newUser.password = bcrypt.hashSync(newUser.password);
        await newUser.save();
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({id: newUser.id},
            process.env.JWT_SECRET,{
               expiresIn : expiresIn
            });
            // const responseuser ={
            //     name: newUser.name,
            //     lastname : newUser.lastname,
            //     email : newUser.email,
            //     password : newUser.password,
            //     accessToken : accessToken,
            //     expiresIn : expiresIn
            //  }
            //  res.send(responseuser);

        res.send("Usuario creado correctamente!");
    } catch (error) {
        res.status(500).send(error+" Error 500")
    }

}

