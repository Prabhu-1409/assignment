import axios from 'axios'
import React, { useState } from 'react'
import './Loginpage.css'
import logo from  './assets/logo.png'
import Homepage from './Homepage'
import { Navigate, redirect, useNavigate } from 'react-router-dom'

function Loginpage() {
    const [email, setemail] = useState('')
    const [password ,setpassword] = useState('')
    const [user_data, setuser_data] = useState('')
    const[alert_message,setalert] = useState('')
    const navigate = useNavigate()
    const userlogin = {
        email:email,
        password:password
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        axios({
            method:'POST',
            url:'http://localhost:3001/signin',
            data:userlogin,
            headers:{
                "Content-Type":'application/json'
            }
        }).then((rec)=>{
            if(rec.data.email===email && rec.data.password===password){
                console.log("User Exist")
                setuser_data(rec.data)
                navigate('/homepage',{replace:true})
            }else{
                console.log("Register")
                setalert("Invalid Credentials or User Doesn't exist")
            }
        })
        
    }


  return (
    <div>
    <div className='login-container'>
        <img src={logo} className='logo' alt='logo'></img>
      <form className='form'>
        <input type='text' className='email' placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
        <input type='text' className='password' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}></input>
        <button onClick={handlesubmit} className='signin'>Login</button>
      </form>
      <h6 className='alert'>{alert_message}</h6>
      <a href='#' className='forgot'>Forgot Password ?</a>
      <a href='/register' className='create'>Create an Account</a>
      </div>
    </div>
  )
}

export default Loginpage



