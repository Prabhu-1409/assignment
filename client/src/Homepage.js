import React, { useState } from 'react'
import helpcenter from './assets/helpcenter.png'
import './Loginpage.css'
import moptro from './assets/moptrologo.png'
import home from './assets/home.png'
import user from './assets/user.png'
import Dashboard from './Dashboard'
import Employee from './Employee'


function Homepage() {
  const[homebutton,sethome] = useState(true)
  const[userbutton, setuser] =useState(false)

  return (
    <div className='homepage'>
      <div>
        <img src={helpcenter} alt='helpcenter' className='helpcenter'></img>
        <div className='circle'>
            <h6 className='notification'>4</h6>
        </div>
        <img src={moptro} alt='moptro' className='moptro'></img>
      </div>
      {userbutton?<Employee></Employee>:
        <Dashboard></Dashboard>
      }
      <div className='navigation'>
        <img src={home} className={homebutton? `button_click_home`:`icon`} alt='home' onClick={()=>{
          sethome(true)
          setuser(false)
        }}></img>
        <div></div>
        <img src={user} className={userbutton? `button_click_user`: `icon`} alt='user' onClick={()=>{
          setuser(true)
          sethome(false)
        }}></img>
      </div>
    </div>
  )
}

export default Homepage
