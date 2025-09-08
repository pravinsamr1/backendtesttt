const express = require('express')
const User = require('../models/user')
const router = express.Router()
const bcrypt = require('bcrypt')

router.post('/register',async(req,res)=>{
    try {
        const {name, phonenumber, password} = req.body

        if(!name || !phonenumber || !password){
            return res.status(400).json({message:'All Fields Required'})
        }

        const checkUser = await User.findOne({phonenumber})

        if(checkUser){
            return res.status(400).json({message:"User Already Exists"})
        }

        const hashpass = await bcrypt.hash(password, 10)

        const newuser = new User({
            name,
            phonenumber,
            password: hashpass
        })

        await newuser.save()

        res.status(200).json({message: "User Registered"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

module.exports = router