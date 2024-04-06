import React from 'react'
import './skills.css'
import iconSet from '../../datas/iconSet'


const Skills = () => {
    return (
        <section id="skills">


            <h3 className="skillsTitle"> Skills </h3>


            <div className="skillsContainer">

                <div className="technicalStack">

                    <h4 className="technicalStackTitle">Technical Stack</h4>

                    <div className="skillSet">
                        {iconSet.map((icon) =>

                            <div className="techLogo" key={icon.id}>

                                <img src={icon.img} alt="techIcon" />
                            </div>

                        )}
                    </div>



                </div>

                <div className="CV">
                    <h4 className="cvTitle"> CV</h4>
                    
                    <a href="#home" className='cvDownload'><button className='cvDownloadBtn'> Télécharger CV <br /><br /> A venir</button></a>
                </div>

            </div>

        </section>
    )
}

export default Skills
