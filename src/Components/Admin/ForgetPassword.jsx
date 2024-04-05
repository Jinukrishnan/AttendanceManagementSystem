import React,{useState} from 'react'
import './ForgetPassword.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const ForgetPassword = () => {
  const navigator=useNavigate()
  const [forget,setForget]=useState({
    email:"",
    password:"",
    confirmpassword:""
  })
  const setData=(e)=>{
    const {value,name}=e.target;
    setForget((pre)=>{return{...pre,[name]:value}})
  }
  const updatePassword=async(e)=>{
    e.preventDefault();
    console.log(forget);
    const{email,password,confirmpassword}=forget;
    if(!(email&&password&&confirmpassword))
    {
      alert('Fields are empty')
    }
    else{
      try {
        const res=await axios.post('http://localhost:3000/api/forgetpassword',{email,password,confirmpassword})
      alert(res.data.msg);
      navigator('/admin')

      } catch (error) {
        alert(error.response.data.msg)
      }
    }
    }
  return (
    <div className='parent'>
      <div className="cont">
        <form action="#" className='form'>
          <h1>Sign in</h1>
          <div><input onChange={setData}  name='email' type="email" placeholder="Email" /></div>
          <div><input onChange={setData}  name='password' type="password" placeholder="Password" /></div>
          <div><input onChange={setData}  name='confirmpassword' type="confirmpassword" placeholder="Confirm Password" /></div>
          <Link to='/admin'>Back to Login</Link>
          <div><button className='button' onClick={updatePassword} >Update Password</button></div>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword
