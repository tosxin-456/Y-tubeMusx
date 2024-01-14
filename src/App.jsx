import React, { useState, } from 'react'
import { Link } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/navbar'
import Homepage from './pages/homePage'
import Login from './pages/login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profilePage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element = {<Login/>}></Route>
          <Route path='/home' element={<Navbar />} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
