import React from 'react'
import './contact.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
    return (
        <section id="contact">

            <h3 className="contactTitle">Contact</h3>
            <div className="contactPara"> Please fill out the form below to contact me </div>


            <div className="contactContainer">


                <div className="contactFormLeft">

                    <form action="" className='contactForm'>

                        <input type="text" className="name" placeholder='Your Name' />
                        <input type="email" className="email" placeholder='Your Email' />
                        <textarea name="message" rows="5" className="messageArea" placeholder='Your message'></textarea>
                        <button type='submit' value='Send' className="submitBtn">Submit</button>

                    </form>

                </div>

                <div className="contactFormRight">

                    <div className="informations">
                        <div className="emailPro"> <EmailIcon />jbdevpro76@gmail.com</div>
                        <div className="phoneNumber"><PhoneIcon />06.75.15.55.95</div>
                        <div className="localisation"> France, Normandy, Rouen </div>
                    </div>

                    <div className="links">
                        <LinkedInIcon className='icon' />
                        <a href="https://github.com/JBPhilippe" target='_blanck'><GitHubIcon className='icon'/></a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact
