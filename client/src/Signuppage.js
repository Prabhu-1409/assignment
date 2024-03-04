import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Loginpage.css'
import logo from './assets/logo.png'
import { Baseurl } from './Variable'

function Signuppage() {
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')
    const[res,setres]=useState('')

    const user_data = {
        firstname:fname,
        lastname:lname,
        emailid:email,
        pass:password
    }

    const handlesignup = (e) =>{
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('firstname',fname)
        formdata.append('lastname',lname)
        formdata.append('email',email)
        formdata.append('password',password)
        console.log([...formdata.entries()])
        axios({
            method:'POST',
            url:`${Baseurl}/signup`,
            data:user_data,
            headers:{
                "Content-Type":'application/json'
            }
        }).then((res)=>{
            setres(res)
        }).catch(err=>{
          console.log(err)
        })
    }

  return (
    <div>
      <div className='login-container'>
      <img src={logo} className='logo' alt='logo'></img>
      <form className='form'>
        <input type='text' placeholder='Enter firstname' autoComplete='off' className='fname' name='firstname' value={fname} onChange={(e)=>{setfname(e.target.value)}}></input>
        <input type='text' placeholder='Enter Lastname' className='email' name='lastname' value={lname} onChange={(e)=>{setlname(e.target.value)}}></input>
        <input type='text' placeholder='Enter Email' name='email' className='email' value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
        <input type='text' placeholder='Enter Password' name='password' className='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
        <button onClick={handlesignup} className='signin'>Sign up</button>
      </form>
      <h6 className='register_alert'>{res.data}</h6>
      <a href='/' className='forgot' id='login'>Login</a>
      </div>
    </div>
  )
}

export default Signuppage
