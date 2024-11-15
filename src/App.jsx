//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import "./components/Products/Products.css"
import About from './components/About/About'
import Contact from './components/Contacts/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from "./components/Navbar/Navbar"
import { Products } from './components/Products/Products'
import Sing_in from './components/Sing-in/Sing_in'
import Welcome from './components/welcome/welcome'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <div>
       
      <BrowserRouter>
       <Welcome/>
      <Navbar/>
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Sing_in" element={<Sing_in/>} />
      <Route path="/About" element={<About/>} />

      </Routes>
    <Footer/>
      </BrowserRouter>

    </div>
    </>
  )
}

export default App
