
import React from 'react';
import { Link } from 'react-scroll'
import './navbar.css';
import logo from '../../assets/LogoJB.png';
import { FaRegMessage } from "react-icons/fa6";
 

const Navbar = () => {
  return (

    <nav id="navbar">
      <a href="#home"><img src={logo} alt="Logo" className="logo" /></a>
      <div className="desktopMenu">
        <Link activeClass='active' to="home" spy={true} smooth={true} offset={-100} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-100} className="desktopMenuListItem" >Projects</Link>
        <Link activeClass='active' to="#" className="desktopMenuListItem">Skills</Link>
        <Link activeClass='active' to="#" className="desktopMenuListItem">Resume</Link>
      </div>
      <button className="desktopMenuButton">
       <FaRegMessage />Contact Me
      </button>
    </nav>
  )
}

export default Navbar