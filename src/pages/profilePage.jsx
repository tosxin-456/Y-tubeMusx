import React from "react"
import logout from '../assets/majesticons_logout-half-circle.svg'
import avatar from '../assets/avatar.svg'
import '../css/profile.css'
import Navbar from "./navbar"


const Profile = () => {
  return (
    <>
      <Navbar/>
      <div className="profileWrap">
        <div className="profileHead">
        <h2>Profile</h2>
        <div className="profileImage">
        <img src='https://medlink-patient.vercel.app/assets/avatar-68656f99.svg' alt="" />
        </div>
        </div>
        <div className="profileInfo">
        <p><span>Profile Name: </span>Tosin Poppins</p>
        <p><span>ID: </span>Tosin Poppins</p>
        <p><span>Email: </span>Tosin Poppins</p>
        <p><span>Top Genre: </span>Tosin Poppins</p>
        <p><span>Premium Membership: </span>Tosin Poppins</p>
        </div>
        <div className="logOutIcon">
        <div className="logout">
          <img src={logout} alt="" />
          <p>Logout</p>
        </div>
        </div>
      </div>
    </>
)
}


export default Profile