import React from "react"
import logout from '../assets/majesticons_logout-half-circle.svg'
import avatar from '../assets/avatar.svg'
import '../css/profile.css'
import back from '../assets/back.svg'
import Navbar from "./navbar"
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
        <div className="profileImage">
        <img src='https://medlink-patient.vercel.app/assets/avatar-68656f99.svg' alt="" />
        </div>
        </div>
        <div className="profileInfo">
        <p><span>Profile Name: </span>Tosin Poppins</p>
        <p><span>ID: </span>TP0909</p>
        <p><span>Email: </span>tosinekshally@gmail.com</p>
        <p><span>Top Genre: </span>Pop</p>
        <p><span>Premium Membership: </span>true</p>
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