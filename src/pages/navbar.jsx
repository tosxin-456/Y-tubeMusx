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
import '../css/navbar.css'
import Homepage from './homePage'


const Navbar = () => {
  function Clicked() {
    const rocketMan = document.querySelector('.rocketMan')
    const hamburger = document.querySelector('.hamburger')
    const navBa = document.querySelector('nav')
    const top = document.querySelector('.top')
    // const options = document.querySelector('.options')
    if (navBa.offsetWidth > 150 ) {
      navBa.classList.remove('open')
      navBa.classList.add('close')
      hamburger.style.marginRight = 'calc(100vw - 70px)';
      hamburger.classList.add('rotate')
      if (navBa.offsetWidth < window.innerWidth * 0.5) {
        rocketMan.style.display = 'none'
        top.style.display = 'none'
        // options.style.marginRight = '-15%'
      }
      else {
        rocketMan.style.display = 'block'
        top.style.display  = 'block'
      }
      
    } else {
      hamburger.classList.remove('rotate')
      hamburger.classList.add('antirotate')
      navBa.classList.remove('close')
      navBa.classList.add('open')
      hamburger.style.marginRight = 'unset';
      setTimeout(() => {
        top.style.display = 'block'
        rocketMan.style.display = 'block';
      }, 1000);
    }
  }
    
  return (
    <>
      <section>
        <nav>
          <img className='hamburger' src={hamburger} alt="" id='hambe' onClick = {()=>Clicked()} />
        <div className='image_and_text'>
            <img src={youTubeLogo} alt="" />
            <p className='top'>TopMusic</p>
          </div>
          <div className='options'>
          <img src={home} id='homee' alt=""  />
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