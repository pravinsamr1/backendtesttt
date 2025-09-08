const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')

const register = require('./routers/register')
const login = require('./routers/login')

app.use(express.json())
app.use(cors())

app.use('/api/user', register)
app.use('/api/user', login)

dotenv.config()

app.get('/', (req,res)=>{
    res.status(200).json({message:"Server In port 3000"})
})


mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log("Server Conneted")
    app.listen(3000, ()=>{
        console.log("Server Ruuning in Port 3000")
    })
})
.catch((err)=>{
    console.log(err.message)
})