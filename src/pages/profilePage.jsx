import React from "react"
import logout from '../assets/majesticons_logout-half-circle.svg'
import avatar from '../assets/avatar2.svg'
import '../css/profile.css'
import camera from '../assets/camera.svg'
import back from '../assets/back.svg'
import Navbar from "../components/navbar"
import { Link } from "react-router-dom"


const Profile = () => {
  return (
    <>
      <div className="profileWrap">
        <div className="back">
          <Link to='/home'>
           <img src={back} alt="" />
          </Link>  
        </div>
        <div className="profileHead">
        <h2>Profile</h2>
        </div>
        <div className="profileImage" onClick={() => document.getElementById('file').click()}>
          <input type="file" name="" id="file" accept="image/*" />
          <img src={avatar} alt="" />
        </div>
        <div className="cameraDiv">
          {/* <img src={camera} alt="" id="camera" /> */}
        </div>
        <div className="profileInfo">
        <p><span>Profile Name: </span>Tosin Poppins</p>
        <p><span>ID: </span>TP0909</p>
        <p><span>Email: </span>tosinekshally@gmail.com</p>
        <p><span>Top Genre: </span>Classic Rock</p>
        <p><span>Premium Membership: </span>true</p>
        <p><span>Privacy Policy: </span>Important for us</p>
        <p><span>Platform Rules:</span> Keeping us safe</p>
        </div>
        <div className="logOutIcon">
          <Link to='/'>
        <div className="logout">
          <img src={logout} alt="" />
          <p>Logout</p>
        </div>
          </Link>
        </div>
      </div>
    </>
)
}


export default Profile