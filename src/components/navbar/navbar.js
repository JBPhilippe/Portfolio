
import React from 'react';
import { Link } from 'react-scroll'
import './navbar.css';
import logo from '../../assets/LogoJB.png';
import { FaRegMessage } from "react-icons/fa6";
 

const Navbar = () => {
  return (

    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">Clients</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
      </div>
      <button className="desktopMenuButton">
       <FaRegMessage />Contact Me
      </button>
    </nav>
  )
}

export default Navbar