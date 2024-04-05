import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <p id="copyrights"> © Copyright 2024 | Jean-Baptiste PHILIPPE | Tous droits reservés</p>
        <ul className="footerLinks">
           <a href="#home"> <li className="legalMentions">Legal Mentions</li></a>
            <a href="#home"><li className="siteMap"> Site Map </li></a>
        </ul>

    </footer>
  )
}

export default Footer