import React from "react";
import '../css/home.css'
import Navbar from "../components/navbar";
import HomePageComponent from "../components/homePageComponent";
const Homepage= ()=> {
  return (
    <>
      <div>
        <Navbar />
        <HomePageComponent/>
    </div>
    </>
  )
}



export default Homepage