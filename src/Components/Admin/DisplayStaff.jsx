import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './DisplayStaff.scss'
const DisplayStaff = () => {
  const [staffs, setStaffs] = useState([])
  async function getStaff() {
    const res = await axios.get("http://localhost:3000/api/getstaff")
    if (res.status == 200) {
      setStaffs([...res.data])
    }
  }

  useEffect(() => {
    getStaff()
  }, [])
  console.log(staffs);
  return (
    <div>
      <div className="dispparent">
        {
          staffs.map((staff)=>(<div className="child">
          <div className="card">
            <div className="profile">
              <img src={`http://localhost:3000/api${staff.imagepath}`} alt="no image" className='image' />
            </div>
            <div className="card_title">
              <h2 className='name'>{staff.fname}{staff.lname}</h2>
              <h3 className='name'>{staff.designation}</h3>
            </div>
          </div>
        </div>))
        }




      </div>
    </div>
  )
}

export default DisplayStaff
