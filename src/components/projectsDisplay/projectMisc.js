import React from 'react'

const ProjectMisc = ({ description, tags }) => {

    return (
        <div className="projectMisc">
            <p className="projectDescription" >
                {description}
            </p>

            <div className="projectsTags">
                {tags}
            </div>

            <div className="projectLinks">
                <a href="#home"> Demo </a>
                <a href="#home"> Lien Repo</a>
            </div>

        </div>
    )
}

export default ProjectMisc