import React from 'react'
import './skills.css'
import css from '../../assets/skills/CSSLogo.webp'
import html from '../../assets/skills/HTMLLogo.webp'
import java from '../../assets/skills/JSLogo.webp'
import react from '../../assets/skills/REACTLogo.webp'
import mongo from '../../assets/skills/MongoDB.webp'
import node from '../../assets/skills/NodeJs.webp'


const Skills = () => {
    return (
        <section id="skills">


            <h3 className="skillsTitle"> Skills </h3>


            <div className="skillsContainer">


                <div className="technicalStack">
                    <h4 className="technicalStackTitle">Technical Stack</h4>
                    <img src={css} alt="logoCss" />
                    <img src={html} alt="logoHtml" />
                    <img src={java} alt="logoJS" />
                    <img src={react} alt="logoReact" />
                    <img src={mongo} alt="logoReact" />
                    <img src={node} alt="logoReact" />

                </div>
                <div className="extraSkills">
                    <h4 className="extraSkillsTitle"> Extra Skills</h4>
                    <p className="extraSkillsPara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut fuga voluptate cum distinctio? Praesentium, tempora odio, minus voluptatum dolorum adipisci necessitatibus officia placeat veniam sequi est accusantium ducimus eligendi omnis?</p>
                </div>

            </div>

        </section>
    )
}

export default Skills
