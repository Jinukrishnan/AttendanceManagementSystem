import React, { useEffect, useState } from 'react'
import './AdminSigninSignup.css'
import axios from 'axios';
const AdminSigninSignup = () => {
  const [admin,setAdmin]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",
    confirmpassword:""
  });
  const setData=(e)=>{
    const {name,value}=e.target
    setAdmin((pre)=>{return{...pre,[name]:value}})
  }

  const addAdmin=async(e)=>{
    e.preventDefault();
    console.log(admin);
    try {
      const { username,email,phone,password,confirmpassword}=admin;
    // if(!(username,email,phone,password,confirmpassword))
    // {
    //   alert("Fields are Empty")
    // }
    // else{
      const res=await axios.post('http://localhost:3000/api/adminregister',{username,email,phone,password,confirmpassword})
     console.log(res); 
    // }
    } catch (error) {
      
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
  return (
    <div>
       <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input onChange={setData} name='username' type="text" placeholder="Name" id='username' />
          <input onChange={setData} name="email" type="email" placeholder="Email"id='email' />
          <input onChange={setData} name="phone" type="password" placeholder="Phone Number" id='phone'/>
          <input onChange={setData} name="password" type="password" placeholder="Password" id='password'/>
          <input onChange={setData} name="confirmpassword" type="confirmpassword" placeholder="Confirm Password" id='confirmpassword' />
          <button onClick={addAdmin}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
        
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>

  
      <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button className="ghost" id="signIn">Sign In</button>
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
