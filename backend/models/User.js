const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        tirm:true
    },
    number:{
        type:String,
        tirm:true,
        unique:true
    },
    password:{
        type:String
    }
},{
    timestamps:true
})

exports.module = mongoose.model('User', userSchema)