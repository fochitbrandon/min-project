//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Navbar from "./components/Navbar/Navbar"
import Welcome from './components/welcome/welcome'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <div><BrowserRouter>
      <Welcome/>
      <Navbar/>
      <Home/>
      
      </BrowserRouter>

    </div>
    </>
  )
}

export default App
