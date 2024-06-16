import React from 'react'
import './Footer.css'
import instagram from '../Assets/instagram.webp'
import pinterest from '../Assets/pinterest.png'
import whatsapp from '../Assets/whatsapppng.png'
import logo from '../Assets/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt=""  height={'65px'} width={'65px'} />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram} alt="" height={'35px'} width={'35px'}/> 
        </div>
        <div className="footer-icons-container">
            <img src={pinterest} alt="" height={'35px'} width={'35px'} /> 
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp} alt="" height={'35px'} width={'35px'} /> 
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
