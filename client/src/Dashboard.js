import React from 'react'
import './Loginpage.css'

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='productivity_container'>
        <div className='dashboard_name'>
            <h6>Employee Productivity Dashboard</h6>
        </div>
        <div className='productivity_level'>
            <div className='container_1'>
                <div className='container_2'>
                    <p className='productivity_day'>Productivity on Monday</p><p className='percent'>4%</p>
                </div>
                <span className='bar'>
                    <span className='monday'></span>
                </span>
            </div>
            <div className='container_1'>
                <div className='container_2'>
                    <p className='productivity_day'>Productivity on Tuesday</p><p className='percent'>92%</p>
                </div>
                <span className='bar'>
                    <span className='tuesday'></span>
                </span>
            </div>
            <div className='container_1'>
                <div className='container_2'>
                    <p className='productivity_day'>Productivity on Wednesday</p><p className='percent'>122%</p>
                </div>
                <span className='bar'>
                    <span className='wednesday'></span>
                </span>
            </div>
            <div className='container_1'>
                <div className='container_2'>
                    <p className='productivity_day'>Productivity on Thursday</p><p className='percent'>93%</p>
                </div>
                <span className='bar'>
                    <span className='thursday'></span>
                </span>
            </div>
            <div className='container_1'>
                <div className='container_2'>
                    <p className='productivity_day'>Productivity on Friday</p><p className='percent'>89%</p>
                </div>
                <span className='bar'>
                    <span className='friday'></span>
                </span>
            </div>
            <div className='container_1'>
                <div className='container_2'>
                    <p className='productivity_day'>Productivity on Saturday</p><p className='percent'>98%</p>
                </div>
                <span className='bar'>
                    <span className='saturaday'></span>
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
