
import React from 'react';
import { Link } from 'react-scroll'
import './navbar.css';
import logo from '../../assets/LogoJB.png';
 

const Navbar = () => {
  return (

    <nav id="navbar">
      <a href="#home"><img src={logo} alt="Logo" className="logo" /></a>
      <div className="desktopMenu">
        <Link activeClass='active' to="home" spy={true} smooth={true}  className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to="projects" spy={true} smooth={true}  className="desktopMenuListItem" >Projects</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true}   className="desktopMenuListItem">Skills</Link>
        <Link activeClass='active' to="#" className="desktopMenuListItem">Resume</Link>
        <Link activeClass='active' to="#" className="desktopMenuListItem">Contact</Link>
        
        
      </div>
    </nav>
  )
}

export default Navbar