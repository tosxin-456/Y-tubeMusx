import { Link } from 'react-router-dom'
import React from "react";
import '../css/login.css'
import email from '../assets/email icon.svg'
import password from '../assets/password icon.svg'
import logo from '../assets/logo7.svg'
import spotify from '../assets/spotify.svg'
import apple from '../assets/applemusic.svg'
import youtube from '../assets/youtubemusic.svg'

const Login = () => {
  return (
    <>
      <div className="form">
        <h1> Welcome Back</h1>
        <div className="nameAndLogo">
          <img src={logo} alt="" />
          <p>topMusic</p>
        </div>
        <p className="passcodeText">Validate with your correct login details</p>
        <div className="formDets">
        <div className="formData">
          <img src={email} alt="" />
          <input type="text" placeholder="email" />
        </div>
        <div className="formData">
          <img src={password} alt="" />
          <input type="password" placeholder="password" />
          </div>
          <a href="" className='forgot'> Forgot password?</a>
        </div>
        <div className=''>
        </div>
        <div className="buttonDiv">
          <Link to='/home' >
            <button>Login</button>
          </Link>
        </div>
        <div>
          <div className='connect'>
            <p>Or connect via</p>
          </div>
          <div className="icons">
            <div className="iconWithWriteUp">
            <Link to='/home'>
           <img src={spotify} alt="" />
              </Link>
          </div>
            <div className="iconWithWriteUp">
            <Link to='/home'>
           <img src={youtube} alt="" />
              </Link>
          </div>
            <div className="iconWithWriteUp">
            <Link to='/home'>
           <img src={apple} alt="" />
              </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  )

}


export default Login