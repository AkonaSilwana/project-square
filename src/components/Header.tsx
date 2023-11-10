import React from 'react';
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <div className='header'>
    <div className='header-logo'>
    <img src={logo} alt='header-logo'/>
    </div>
    <ul className='nav'>
      <li>Services</li>
      <li>Industries</li>
      <li>Careers</li>
      <li>Contact Us</li>
      </ul>
   <button className="action-btn">Let's Talk</button>
  </div>
  )
}

export default Header