import React from 'react'
import './about.css'
import avatar from '../../assets/Avatar.png'

const About = () => {
  return (
    <section id="about">

      <h2 className="aboutTitle">About me</h2>
      <div className="avatar">
        <img src={avatar} alt="Portrait" className="portrait" />
      </div>
      <div className="aboutContent">


        <p className="aboutPara">Bonjour, <br /><br /> Je suis développeur Web junior en devenir. J'ai 35ans et je suis actuellement en formation chez OpenClassrooms où j'acquiers en ce moment les compétences de base nécessaires grâce à des projets professionalisants. <br /> <br />
        Pourquoi cette reconversion maintenant pourrait-on se demander? <br /><br />
        J'ai un parcours d'études aussi divers que variés, je suis passé par médecine, par biologie,  par des études d'infirmier et d'assistant dentaire. Mais mes premières études portaient sur ingénieur informatique. Et les circonstances on fait que j'ai pu à nouveau me pencher sur ce domaine. <br /><br />
        Pour ce qui est de ma situation précédente, j'étais assistant dentaire. Rigueur et organisation sont des points communs que je retrouve avec plaisir dans le code. Mon activité se portait plus sur l'aspect humain et administratif, de la présentation des devis aux patients à la comptabilité en passant par l'optimisation de l'organisation du cabinet. <br /><br />
        Étant naturellement curieux adaptable et autonome, mes objectifs sont actuellement de décrocher mon diplôme et par la suite de monter en compétence afin de découvrir les possibilités qu'offre le monde du développement, et d'en faire profiter les autres.</p>

      </div>
    </section>
  )
}

export default About