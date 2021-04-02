const mongoose = require('mongoose');
// const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type : String,
        required:true,
    },
    phone:{
        type: Number,
        required: true,
    },
    work:{
        type : String,
        required:true,
    },
    password:{     

    },
    cpassword:{

    }
})

const User = new mongoose.model("User",userSchema)


module.exports = User;