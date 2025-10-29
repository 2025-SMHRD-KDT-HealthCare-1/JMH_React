import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Join from './component/Join'

function App() {

  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Join' element={<Join/>}/>
      </Routes>
    </>
  )
}

export default App
