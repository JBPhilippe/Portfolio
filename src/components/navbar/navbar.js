
import React, { useState } from 'react';
import { Link } from 'react-scroll'
import './navbar.css';
import logo from '../../assets/LogoJB.png';
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (

    <nav id="navbar">
      <Link to="home" smooth={true}> <img src={logo} alt="Logo" className="logo" /></Link>
      <div className="desktopMenu">
        <Link to="home" smooth={true} className="desktopMenuListItem">Accueil</Link>
        <Link to="about" smooth={true} offset={-80} className="desktopMenuListItem">À propos</Link>
        <Link to="projects" smooth={true} offset={-150} className="desktopMenuListItem" >Projets</Link>
        <Link to="skills" smooth={true} offset={-150} className="desktopMenuListItem">Compétences</Link>
        <Link to="contact" smooth={true} offset={-150} className="desktopMenuListItem">Contact</Link>
      </div>


      <MenuIcon className="mobMenu" onClick={() => setShowMenu(!showMenu)}></MenuIcon>
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link to="home" smooth={true} className="listItem" onClick={() => setShowMenu(false)}>Accueil</Link>
        <Link to="about" smooth={true} offset={-100} className="listItem" onClick={() => setShowMenu(false)}>À propos</Link>
        <Link to="projects" smooth={true} offset={-150} className="listItem" onClick={() => setShowMenu(false)}>Projets</Link>
        <Link to="skills" smooth={true} offset={-150} className="listItem" onClick={() => setShowMenu(false)}>Compétences</Link>
        <Link to="contact" smooth={true} offset={-150} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar