import React from 'react';



const ProjectThumb = ({ title, cover }) => {
    return (

        <div className="projectGeneral">

            <div className="projectThumb" >

                <div className="thumb-overlay"></div>
                <img src={cover} alt={title} className="projectImg" />
                <h2 className="projectThumbTitle">{title}</h2>
            </div>

        </div>

    );

}

export default ProjectThumb;