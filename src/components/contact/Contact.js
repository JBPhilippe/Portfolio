import React, { useRef } from 'react'
import './contact.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_fntulsh', 'template_iz96s46', form.current, {
                publicKey: 'JuPUm4wPs7oVf1xkt',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Email sent succesfully!');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id="contact">

            <h1 className="contactTitle">Contact</h1>

            <div className="contactContainer">


                <div className="contactFormLeft">

                    <form className='contactForm' name="contact_form" ref={form} onSubmit={sendEmail}>
                        
                        <input type="text" id="name" className="name" name="from_name" placeholder='Your Name' />
                       
                        <input type="email"  id="email"className="email" name="from_email" placeholder='Your Email' />
                        
                        <textarea  id="message" name="message" rows="5" className="messageArea" placeholder='Your message'></textarea>

                        <button type='submit' value='Send' className="submitBtn">Envoyer</button>

                    </form>

                </div>

                <div className="contactFormRight">

                    <div className="informations">
                        <div className="emailPro"> <EmailIcon />jbdevpro@gmail.com</div>
                        <div className="phoneNumber"><PhoneIcon />06.75.15.55.95</div>
                        <div className="localisation"> <LocationOnIcon />France, Rouen </div>
                    </div>

                    <div className="links">
                        <LinkedInIcon className='icon' />
                        <a href="https://github.com/JBPhilippe" target='_blanck' aria-label="Github"><GitHubIcon className='icon' /></a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact
