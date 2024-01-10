import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import hamburger from '../assets/hamburger.svg'
import close from '../assets/close.svg'
import youTubeLogo from '../assets/logo.svg'
import home from '../assets/home.svg'
import playlist from '../assets/playlist.svg'
import artist from '../assets/artist.svg'
import premium from '../assets/premuim.svg'
import liked from '../assets/liked.svg'
import account from '../assets/my account.svg'
import musicman from '../assets/music man.svg'
import search from '../assets/search.svg'
import '../css/navbar.css'
import Homepage from './homePage'


const Navbar = () => {
  function Clicked() {
    console.log('clicked the button')
    const hamburger = document.querySelector('.hamburger')
    hamburger.style.marginRight = 'calc(100vw - 70px)';
    hamburger.classList.add('rotate')
  }
    
  return (
    <>
      <section>
        <nav>
          <img className='hamburger' src={hamburger} alt="" id='hambe' onClick = {()=>Clicked()} />
        <div className='image_and_text'>
            <img src={youTubeLogo} alt="" />
            <p>TopMusic</p>
          </div>
        <div className='options'>
          <img src={home} id='home' alt="" />
            <p>Home</p>
            <div className='description'> Home </div>
        </div>
        <div className='options'>
          <img src={playlist} id ='playlist' alt="" />
            <p>Playlist</p>
            <div className='description'> Playlist</div>
        </div>
        <div className='options'>
          <img src={artist} id = 'artist' alt="" />
            <p>Artist</p>
            <div className='description'> Artists</div>
        </div>
        <div className='options'>
          <img src={premium} alt="" id='premium' />
            <p>Premium</p>
            <div className='description'> Premium</div>
        </div>
        <div className='options'>
          <img src={liked} alt="" id='liked' />
            <p>Liked</p>
            <div className='description'> Liked songs</div>
        </div>   <div className='options'>
          <img src={account} alt="" id='account' />
            <p>Account</p>
            <div className='description'> My account</div>
          </div>
          <div className='rocketMan'>
          <p>Topins Musica en ecompassant</p>
          <img src={musicman} alt="" />
          </div>
      </nav>
        <Homepage/>
      </section>
    </>
 )
}





export default Navbar