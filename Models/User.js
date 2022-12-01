const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require : true,
        unique: true
    },
    password:{
        type:String,
        require: true
  
     },
    role:{
        type : String,
        require : true,
  
    },
    date_cre:{
        type: Date,
        default: Date.now()
  
     },

});




module.exports = mongoose.model('User', userSchema);