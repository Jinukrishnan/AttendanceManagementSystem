import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios';
import './AdminHome.css'
import Sub1 from './Sub1';
import Sub2 from './Sub2';

const AdminHome = () => {
const [user,setUser]=useState('')
const getUser=async()=>{
  const token=localStorage.getItem('adminToken');
    
    const res=await axios.get('http://localhost:3000/api/adminhome',{headers:{Authorization:`Bearer ${token}`}})
    setUser(res.data);
}
  useEffect(()=>{
    getUser();
  },[])
  return (
    <div>
      <AdminNavbar user={user}/>
      <div className='main'>
       <Sub1/>
       <Sub2/>
       
      </div>
    </div>
  )
}

export default AdminHome
