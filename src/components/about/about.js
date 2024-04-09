import React from 'react'
import './about.css'
import avatar from '../../assets/Avatar.png'

const About = () => {
  return (
    <section id="about">

      <h1 className="aboutTitle">À propos</h1>
      <div className="avatar">
        <img src={avatar} alt="Portrait" className="portrait" />
      </div>
      <div className="aboutContent">


        <p className="aboutPara">

          Bonjour, <br /><br />

          Je suis développeur Web en formation. J'ai 35 ans et je suis actuellement en formation chez OpenClassrooms où j'acquiers les compétences nécessaires à travers des projets professionnels. <br /><br />
          Pourquoi cette reconversion maintenant, pourrait-on se demander ? <br /><br />
          Mon parcours scolaire est aussi divers que varié, j'ai étudié la médecine, la biologie, les soins infirmiers et l'assistance dentaire. Mais mes premières études étaient en informatique. Les circonstances m’ont permis de pouvoir à nouveau me tourner vers ce domaine. <br /><br />
          Précédemment j’étais assistant dentaire. La rigueur et l'organisation sont des points communs que je retrouve avec plaisir dans le code. Mon activité s'est davantage portée sur l'aspect humain et administratif, depuis la présentation des devis
          aux patients, à la comptabilité et à l'optimisation de l'organisation du cabinet. <br /><br />
          Etant naturellement curieux, adaptable et autonome, mes objectifs sont actuellement d'obtenir mon diplôme et par la suite une montée compétences afin de découvrir les possibilités offertes par le monde du développement, et de les partager avec les autres.</p>

      </div>
    </section>
  )
}

export default About