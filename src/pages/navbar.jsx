import React ,{useState} from 'react'
import hamburger from '../assets/hamburger.svg'
import close from '../assets/close.svg'
import youTubeLogo from '../assets/logo.svg'
import home from '../assets/home.svg'
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
      </nav>
      <div className='menu'>
      </div>
    </>
 )
}





export default Navbar