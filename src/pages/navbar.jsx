import youTubeLogo from '../assets/logo.svg'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
        <div className='image_and_text'>
            <img src={youTubeLogo} alt="" />
            <p>Music</p>
       </div>
        </nav>
    </header>
    </>
 )
}





export default Navbar