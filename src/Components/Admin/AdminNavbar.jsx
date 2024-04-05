import React from 'react'
import './AdminNavbar.css'
import { useNavigate } from "react-router-dom";
const AdminNavbar = ({user}) => {
  const navigator=useNavigate();
  const logOut=()=>{
    localStorage.removeItem('adminToken');
    navigator('/admin',{ replace: true })
  }
  return (
    <div className='con'>
        <div className="child1"><h3>Admin Page</h3></div>
        <div className="child2"><h3>{user}</h3> <button onClick={logOut} className='logout'>Log Out</button></div>
    </div>
  )
}

export default AdminNavbar
