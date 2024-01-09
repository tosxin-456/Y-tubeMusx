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
import sixNine from '../assets/6ix9ine.svg'
import '../css/navbar.css'


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
            <p>Music</p>
        </div>
        <div className='options'>
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div className='options'>
          <img src={playlist} alt="" />
          <p>Playlist</p>
        </div>
        <div className='options'>
          <img src={artist} alt="" />
          <p>Artist</p>
        </div>
        <div className='options'>
          <img src={premium} alt="" />
          <p>Premium</p>
        </div>
        <div className='options'>
          <img src={liked} alt="" />
          <p>Liked</p>
        </div>   <div className='options'>
          <img src={account} alt="" />
          <p>Account</p>
        </div>
      </nav>
        {/* <img src={sixNine} alt="" /> */}
      </section>
    </>
 )
}





export default Navbar