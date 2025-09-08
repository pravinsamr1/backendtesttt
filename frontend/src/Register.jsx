import React from 'react'
import './register.css'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const [form, setForm] = useState({
        name:'',
        phonenumber:'',
        password:''
    })

    const handleInput = (e)=>{
        const {name, value} = e.target

        setForm((prevform)=>({...prevform,[name]:value}))
    }



    const handleSubmit = async(e)=>{
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:3000/api/user/register', form)

            if(response.status === 200){
                console.log(response.data.message)
            }

            if(response.status === 400){
                console.log(response.data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
        console.log(form)
    }
  return (
    <div>
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
            <div className="input">
                <input type="text" placeholder='Name' onChange={handleInput} name='name' value={form.name} />
            </div>
            <div className="input">
                <input type="number" placeholder='Phone Number' onChange={handleInput} name='phonenumber' value={form.phonenumber}/>
            </div>
            <div className="input">
                <input type="password" placeholder='Password' onChange={handleInput} name='password' value={form.password}/>
            </div>

            <div className="btn">
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
  )
}

export default Register