import React ,{useState} from 'react'
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
  
  function iconChanger() {
    const [icon, setIcon] = useState(hamburger);
    function handleClick() {
      if (icon === hamburger) {
        setIcon(close);
      } else {
        setIcon(hamburger);
      }
    }
}
    
  return (
    <>
      <section>
        <nav>
          {/* <img className='hamburger' src={hamburger} alt="" id='hambe' /> */}
        <div className='image_and_text'>
            <img src={youTubeLogo} alt="" />
            <p>TopMusic</p>
        </div>
        <div className='options'>
          <img src={home} id='home' alt="" />
          <p>Home</p>
        </div>
        <div className='options'>
          <img src={playlist} id ='playlist' alt="" />
          <p>Playlist</p>
        </div>
        <div className='options'>
          <img src={artist} id = 'artist' alt="" />
          <p>Artist</p>
        </div>
        <div className='options'>
          <img src={premium} alt="" id='premium' />
          <p>Premium</p>
        </div>
        <div className='options'>
          <img src={liked} alt="" id='liked' />
          <p>Liked</p>
        </div>   <div className='options'>
          <img src={account} alt="" id='account' />
          <p>Account</p>
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