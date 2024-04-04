import React from 'react'
import './home.css'
import avatar from '../../assets/Avatar.png'

const Home = () => {
  return (
    <section id="home">

        <div className="homeContent">
          <span className="introHello">Hello,</span>
          <span className="introText">I'm <span className="introName">Jean-Baptiste PHILIPPE </span> <br /> Web developper</span>
        </div>

        <div className="avatar">
          <img src={avatar} alt="Portrait" className="portrait" />
        </div>

    </section>
  )
}

export default Home