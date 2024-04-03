import React from 'react';


const ProjectThumb = ({ title, cover, description, tags }) => {
    return (
        <div className="projectThumb">
            <div className="thumb-overlay"></div>
            <img src={cover} alt={title} className="cards-img" />
            <h2 className="projectTitle">{title}</h2>
            <p className="projectDescription"> {description}</p>
            <p className="tags">{tags}</p>
        </div>
    );
}

export default ProjectThumb;