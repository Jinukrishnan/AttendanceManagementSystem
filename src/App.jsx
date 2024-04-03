import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminSigninSignup from './Components/Admin/AdminSigninSignup'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/admin' Component={AdminSigninSignup}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
