import React, { useState } from 'react'
import axios from 'axios'
import './Loginpage.css'
import search_icon from './assets/search.png'

function Employee() {
    const [search , setsearch] = useState('')
    const [searchemployee , setsearchemployee] = useState([])
    if(search===''){
            axios.get('https://backend-25ei.onrender.com/employepage').then((details)=>{
            setsearchemployee(details.data)
            //console.log(details)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    const search_button = (e)=>{
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('search',search)
            axios.post('https://backend-25ei.onrender.com/employee_search',formdata,{
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((details)=>{
                console.log(details)
                setsearchemployee(details.data)
            })
    }

  return (
    <div className='employee'>
      <div className='employee_container_0'>
      <div className='search_container'>
      <input type='text' placeholder='Search with Name' name='search' className='search_bar' value={search} onChange={(e)=>{setsearch(e.target.value)}}></input>
      <img src={search_icon} onClick={search_button} alt='search_icon' className='search_icon'></img>
      </div>
      <div className='employe_array'>
        {
           searchemployee && searchemployee.map((details,i)=>{
                return <React.Fragment>
                <div className='listview'>
                    <div className='employe_details'>
                        <div className='list_container_0'>
                            <div className='titles'>
                                <h6 className='title'>EmpID</h6>
                                <h6 className='colon'>:</h6>
                                <h6 className='details'>{details.empid}</h6>
                            </div>
                            <div className='titles'>
                                <h6 className='title'>Name</h6>
                                <h6 className='colon'>:</h6>
                                <h6 className='details'>{details.name}</h6>
                            </div>
                            <div className='titles'>
                                <h6 className='title'>DOB</h6>
                                <h6 className='colon'>:</h6>
                                <h6 className='details' id='dob'>{details.dob}</h6>
                            </div>
                            <div className='titles'>
                                <h6 className='title'>Role</h6>
                                <h6 className='colon'>:</h6>
                                <h6 className='details' id='role'>{details.role}</h6>
                            </div>
                        </div>
                        <div className='circle_1'>
                            <p className='circle_id'>{details.empid}</p>
                        </div>
                    </div>
                </div>
                </React.Fragment>
            })
        }
      </div>
      </div>
    </div>
  )
}

export default Employee
