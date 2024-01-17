import React ,{useState} from 'react'
import hamburger from '../assets/hamburger.svg'
import youTubeLogo from '../assets/logo7.svg'
import home from '../assets/home.svg'
import playlist from '../assets/playlist.svg'
import artist from '../assets/artist.svg'
import premium from '../assets/premuim.svg'
import liked from '../assets/liked.svg'
import account from '../assets/my account.svg'
import musicman from '../assets/music man.svg'
import close from '../assets/close.svg'
import '../css/navbar.css'
import Homepage from './homePage'
import {Link} from 'react-router-dom'

const Navbar = () => {
  function Clicked() {
    const rocketMan = document.querySelector('.rocketMan')
    const hamburger = document.querySelector('.hamburger')
    const navBa = document.querySelector('nav')
    const top = document.querySelector('.top')
    const close = document.getElementById('close')
    // const options = document.querySelector('.options')
    if (navBa.offsetWidth > 110) {
      close.style.border = 'none'
      close.style.boxShadow = '0 0 0.7rem #AE0505'
      hamburger.classList.remove('antirotate')
      hamburger.classList.add('rotate')
      hamburger.style.display = 'block'
      close.style.display = 'none'
      navBa.classList.remove('open')
      navBa.classList.add('close')
      if (navBa.offsetWidth < window.innerWidth * 0.5) {
        rocketMan.style.display = 'none'
        top.style.display = 'none'
      }
      else {
        rocketMan.style.display = 'block'
        top.style.display  = 'block'
      }
      setTimeout(() => {
        hamburger.style.boxShadow = 'unset'
      }, 1000);
    } else {
      console.log(navBa.offsetWidth)
      hamburger.style.border = 'none'
      hamburger.style.boxShadow = '0 0 0.7rem #AE0505'
      close.classList.remove('rotate')
      close.classList.add('antirotate')
      hamburger.style.display = 'none'
      close.style.display = 'block'
      navBa.classList.remove('close')
      navBa.classList.add('open')
      hamburger.style.marginRight = 'unset';
      setTimeout(() => {
        close.style.boxShadow = 'unset'
        top.style.display = 'block'
        rocketMan.style.display = 'block';
      }, 1000);
    }
  }
    
  return (
    <>
      <section>
        <nav>
          <img className='hamburger' src={hamburger} alt="" id='hambe' onClick={() => Clicked()} />
          <img className='hamburger' src={close} alt="" id='close' onClick={() => Clicked()} />
        <div className='image_and_text'>
            <img src={youTubeLogo} loading='lazy' alt="" />
            <p className='top'>topMusic</p>
          </div>
            <Link to = '/home'>  
          <div className='options'>
          <img src={home} id='homee' alt=""  />
            <p>Home</p>
            <div className='description'> Home </div>
        </div>
          </Link>
          <Link to = '/playlist'>     
        <div className='options'>
          <img src={playlist} id ='playlist' alt="" />
            <p>Playlist</p>
            <div className='description'> Playlist</div>
        </div>
          </Link>
          <Link to = '/artist'>   
        <div className='options'>
          <img src={artist} id = 'artist' alt="" />
            <p>Artist</p>
            <div className='description'> Artists</div>
        </div>
          </Link>
          <Link to = '/premuim'>      
        <div className='options'>
          <img src={premium} alt="" id='premium' />
            <p>Premium</p>
            <div className='description'> Premium</div>
        </div>
          </Link>
          <Link to = '/liked songs'>
        <div className='options'>
          <img src={liked} alt="" id='liked' />
            <p>Liked</p>
            <div className='description'> Liked</div>
            </div>
          </Link>
            <Link to='/profile'>  
            <div className='options'>
            <img src={account} alt="" id='account' />
            <p>Account</p>
            <div className='description'> Account</div>
            </div>
            </Link>
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