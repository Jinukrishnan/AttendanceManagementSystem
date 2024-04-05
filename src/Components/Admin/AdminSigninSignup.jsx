import React, { useEffect, useState } from 'react'
import './AdminSigninSignup.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const AdminSigninSignup = () => {
  const navigator=useNavigate();
  // register
  const [admin,setAdmin]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",
    confirmpassword:""
  });
  // login
  const [login,setLogin]=useState({
    email:"",
    password:""
  })
  // register
  const setData=(e)=>{
    const {name,value}=e.target
    setAdmin((pre)=>{return{...pre,[name]:value}})
  }
// register
  const addAdmin=async(e)=>{
    e.preventDefault();
    console.log(admin);
    try {
      const { username,email,phone,password,confirmpassword}=admin;
   
      const res=await axios.post('http://localhost:3000/api/adminregister',{username,email,phone,password,confirmpassword})
      
     if(res.status==201)
     {
       alert(res.data.msg)
      setAdmin({
        username:"",
        email:"",
        phone:"",
        password:"",
        confirmpassword:""
      })
     }

    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data.msg)
    }
  }
  
  useEffect(()=>{
    const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
  container.classList.add("right-panel-active")
);

signUpButton.addEventListener('click', () =>
  container.classList.remove("move-back")
);

signInButton.addEventListener('click', () =>
  container.classList.remove("right-panel-active")
);

signInButton.addEventListener('click', () =>
  container.classList.add("move-back")
);
  },[])
  // login
  const setLog=(e)=>{
    const {value,name}=e.target;
    setLogin((pre)=>{return{...pre,[name]:value}})

      }
    // login
    const SignIn=async(e)=>{
      e.preventDefault();
     try {
      const {email,password}=login;
      const res=await axios.post('http://localhost:3000/api/adminlogin',{email,password})
      console.log(res.status);
      if(res.status==200){
        console.log(typeof(res.data.token));
        // sessionStorage.setItem('adminToken',res.data.token)
        localStorage.setItem('adminToken',res.data.token)
        alert(res.data.msg)
        navigator('/adminhome',{ replace: true });
      }
     } catch (error) {

    alert(error.response.data.msg);
      
     }
    }
  return (
    <div className='signinsignup'>
       <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input onChange={setData} value={admin.username} name='username' type="text" placeholder="Name" id='username' />
          <input onChange={setData}  value={admin.email} name="email" type="email" placeholder="Email"id='email' />
          <input onChange={setData}  value={admin.phone} name="phone" type="password" placeholder="Phone Number" id='phone'/>
          <input onChange={setData}  value={admin.password} name="password" type="password" placeholder="Password" id='password'/>
          <input onChange={setData}  value={admin.confirmpassword} name="confirmpassword" type="confirmpassword" placeholder="Confirm Password" id='confirmpassword' />
          <button className='button' onClick={addAdmin}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
        
          <span>or use your account</span>
          <input onChange={setLog} name='email' type="email" placeholder="Email" />
          <input onChange={setLog} name='password' type="password" placeholder="Password" />
          <Link to='/forgetpassword'>Forgot your password?</Link>
          <button className='button' onClick={SignIn}>Sign In</button>
        </form>
      </div>

  
      <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button  className="ghost" id="signIn">Sign In</button>
      </div>
      <div className="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button className="ghost" id="signUp">Sign Up</button>
      </div>
    </div> 
    </div>
  )
}

export default AdminSigninSignup;
