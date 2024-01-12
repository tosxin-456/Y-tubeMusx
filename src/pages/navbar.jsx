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


const Navbar = () => {
  function Clicked() {
    const rocketMan = document.querySelector('.rocketMan')
    const hamburger = document.querySelector('.hamburger')
    const navBa = document.querySelector('nav')
    const top = document.querySelector('.top')
    const close = document.getElementById('close')
    // const options = document.querySelector('.options')
    if (navBa.offsetWidth > 150) {
      console.log('open')
      close.style.border = 'none'
      close.style.boxShadow = '0 0 0.7rem rgb(255, 9, 50)'
      hamburger.classList.remove('antirotate')
      hamburger.classList.add('rotate')
      hamburger.style.display = 'block'
      close.style.display = 'none'
      navBa.classList.remove('open')
      navBa.classList.add('close')
      setTimeout(() => {
        hamburger.style.boxShadow = 'unset'
      }, 1000);
      if (navBa.offsetWidth < window.innerWidth * 0.5) {
        rocketMan.style.display = 'none'
        top.style.display = 'none'
      }
      else {
        rocketMan.style.display = 'block'
        top.style.display  = 'block'
      }
      
    } else {
      console.log('close')
      hamburger.style.border = 'none'
      hamburger.style.boxShadow = '0 0 0.7rem rgb(255, 9, 50)'
      hamburger.style.display = 'none'
      close.style.display = 'block'
      close.classList.remove('rotate')
      close.classList.add('antirotate')
      navBa.classList.remove('close')
      navBa.classList.add('open')
      hamburger.style.marginRight = 'unset';
      setTimeout(() => {
        top.style.display = 'block'
        rocketMan.style.display = 'block';
        close.style.boxShadow = 'unset'
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
            <div className='description'> Liked</div>
        </div>   <div className='options'>
          <img src={account} alt="" id='account' />
            <p>Account</p>
            <div className='description'> Account</div>
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