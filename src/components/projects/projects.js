import React from 'react'
import './projects.css'
import ProjectDisplay from '../projectsDisplay/projectDisplay'



const Projects = () => {
    return (
        <section id="projects">

            <div className="projectsHeader">

                <h1 className="projectsTitle"> Projets</h1>

            </div>

            <ProjectDisplay />
            
        </section>
    )
}

export default Projects