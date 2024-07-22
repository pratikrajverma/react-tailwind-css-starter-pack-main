import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { Contact } from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'

const Wrapper = () => {
  const [loginbtn, setLoginbtn] = useState(true)

  return (
    <div className='bg-black min-h-screen text-white'>




        <Navbar loginbtn={loginbtn} setLoginbtn={setLoginbtn}/>



        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login setLoginbtn={setLoginbtn}/>} />
            <Route path='/signup' element={<Signup setLoginbtn={setLoginbtn}/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
    </div>
  )
}

export default Wrapper