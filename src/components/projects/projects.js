import React from 'react'
import './projects.css'
import ProjectDisplay from '../projectsDisplay/projectDisplay'



const Projects = () => {
    return (
        <section id="projects">

            <div className="projectsHeader">

                <div className="projectsTitle"> Projects</div>
                <p className="projectsPara">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, dignissimos? Ipsum quisquam, recusandae natus ab repellat sapiente ea nemo voluptates officiis numquam, incidunt, sequi tempore beatae atque consequatur labore tempora. </p>

            </div>

            <ProjectDisplay />
            
        </section>
    )
}

export default Projects