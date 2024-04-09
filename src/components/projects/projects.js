import React from 'react'
import './projects.css'
import ProjectDisplay from '../projectsDisplay/projectDisplay'



const Projects = () => {
    return (
        <section id="projects">

            <div className="projectsHeader">

                <div className="projectsTitle"> Projets</div>

            </div>

            <ProjectDisplay />
            
        </section>
    )
}

export default Projects