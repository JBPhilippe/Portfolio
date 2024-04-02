import React from 'react'
import { Link } from 'react-scroll'
import './home.css'
import avatar from '../../assets/Avatar2.png'
import { FaBriefcase } from "react-icons/fa6";

const Home = () => {
  return (
    <section id="home">
        <div className="homeContent">
            <span className="introHello">Hello,</span>
            <span className="introText">I'm <span className="introName">Jean-Baptiste PHILIPPE </span> <br /> Web developper</span>
            <p className="introPara"> I'm a backend web developper </p>
            <Link> <button className="btnHire"> <FaBriefcase /> Hire me </button></Link>
        </div>
        <img src={avatar} alt="Portrait" className='avatar'/>
    </section>
  )
}

export default Home