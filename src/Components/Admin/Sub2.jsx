import React, { useState } from 'react'
import './AdminHome.css'
import AddStaff from './AddStaff';
import DisplayStaff from './DisplayStaff';
const Sub2 = () => {
    const [div,setDiv]=useState('addStaff');
    const handleButtonClick=()=>{
        setDiv(div=='addstaff'?'displaystaff':'addstaff')
    }
    return (
        <div className="sub2">
            <div className='subnav'>
                <input type="text" placeholder='Search' />
               <div>
               <select name="department" id="">
                    <option value="software">Software</option>
                    <option value="networking">Networking</option>
                    <option value="CyberSecurity">CyberSecurity</option>
                </select>
                <button className='addstaff' onClick={handleButtonClick}>Add Staff</button>
               </div>
               
            </div>
            {div==='addstaff'&&<AddStaff/>}
               {div==='displaystaff'&&<DisplayStaff/>}

        </div>
    )
}

export default Sub2
