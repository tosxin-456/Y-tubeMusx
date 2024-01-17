import React, { useState, } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Homepage from './pages/homePage'
import Login from './pages/login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profilePage'
import Liked from './pages/likedPages'
import Artist from './pages/artist'
import Premuim from './pages/premuim'
import Playlist from './pages/playlist'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element = {<Login/>}></Route>
          <Route path='/home' element={<Navbar />} />
          <Route path='/profile' element={<Profile />} />
          <Route exact path='/likedsongs' element = {<Liked/>}></Route>
          <Route exact path='/artist' element = {<Artist/>}></Route>
          <Route exact path='/premium' element = {<Premuim/>}></Route>
          <Route exact path='/playlist' element = {<Playlist/>}></Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
