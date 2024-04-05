import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminSigninSignup from './Components/Admin/AdminSigninSignup'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AdminHome from './Components/Admin/AdminHome'
import ForgetPassword from './Components/Admin/ForgetPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/admin' Component={AdminSigninSignup}/>
        <Route path='/adminhome' Component={AdminHome}/>
        <Route path='/forgetpassword' Component={ForgetPassword}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
