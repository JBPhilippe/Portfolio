import React from 'react'
import './skills.css'
import iconSet from '../../datas/iconSet'
import cvPreview from '../../assets/capture-Cv.png'



const Skills = () => {
    return (
        <section id="skills">


            <h1 className="skillsTitle"> Compétences </h1>


            <div className="skillsContainer">

                <div className="technicalStack">

                    <h2 className="technicalStackTitle">Technical Stack</h2>

                    <div className="skillSet">
                        {iconSet.map((icon) =>

                            <div className="techLogo" key={icon.id}>

                                <img src={icon.img} alt={icon.alt} />
                            </div>

                        )}
                    </div>



                </div>

                <div className="CV">
                    <img src={cvPreview} alt="cvPReview" className='cvPreview'/>
                    
                    <a href="../skills/cvDownload.pdf" className='cvDownload' download='Cv_JB_PHILIPPE' ><button className='cvDownloadBtn'  > Télécharger CV </button></a>
                </div>

            </div>

        </section>
    )
}

export default Skills
