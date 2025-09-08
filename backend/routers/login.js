const express = require('express')
const userSchema = require('../models/user')
const router = express.Router()
const bcrypt = require('bcrypt')

router.post('/login', async(req,res)=>{
    try {
        const {phonenumber, password} = req.body

        if(!phonenumber || !password){
            res.status(400).json({message:"All Fields Required"})
        }

        const checkUser = await userSchema.findOne({phonenumber})

        if(!checkUser){
            res.status(400).json({message:"No User Found"})
        }

        const checkpass = await bcrypt.compare(checkUser.password, password)

        if(!checkpass){
            res.status(400).json({message:"Invalid Username or Password"})
        }

        res.status(200).json({message:"User LoggedIn"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

module.exports = router