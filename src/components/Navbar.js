import React from 'react';
import logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo"/>
      <ul className="nav-list">
        <li className="nav-links"><a href="">Tour</a></li>
        <li className="nav-links"><a href="">Enterprise</a></li>
        <li className="nav-links"><a href="">Resources</a></li>
        <li className="nav-links"><a href="">About</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;