const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const userRegister = require('./Router/userRegister')

app.use(express.json());
app.use(cors());

dotenv.config();

// Router Routes
app.use('/api/user', userRegister)





// Server Running PORT
const PORT = process.env.PORT


mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log("Server connected to DB")
    app.listen(PORT,()=>{
        console.log(`Server Running in PORT ${PORT}`)
    })
})
.catch((err)=>{
    console.log(err.message)
})

