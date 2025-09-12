const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const router = express.Router()


router.post('/user-register',async(req,res)=>{
    try {
        const { name, email, phonenumber, password } = req.body;

        if(!name || !email || !phonenumber || !password){
            return res.status(400).json({message:'All Fields Required'});
        };

        const checkUser = await User.findOne({email});

        if(checkUser){
            return res.status(400).json({message:"User Already Exists"});
        };

        const hashpass = await bcrypt.hash(password, 12);

        const newUser = new User({
            name,
            email,
            phonenumber,
            password:hashpass
        });

        await newUser.save();

        res.status(200).json({message:"User Added Succesfully"});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
})

module.exports = router;