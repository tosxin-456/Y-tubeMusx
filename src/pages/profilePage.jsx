import React from "react"
import logout from '../assets/majesticons_logout-half-circle.svg'



const Profile = () => {
  return (
    <>
      <div className="profileWrap">
        <div className="profileImmage">
        <img src="" alt="" />
        </div>
        <div className="profileInfo">
        <p><span>Profile Name:</span>Tosin Poppins</p>
        <p><span>Id:</span>Tosin Poppins</p>
        <p><span>Email:</span>Tosin Poppins</p>
        <p><span>Top Genre:</span>Tosin Poppins</p>
        <p><span>Premium Membership:</span>Tosin Poppins</p>
        </div>
        <div className="logout">
          <img src={logout} alt="" />
          <p>Logout</p>
        </div>
      </div>
    </>
)
}


export default Profile