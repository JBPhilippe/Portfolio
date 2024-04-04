import React from 'react'
import './projects.css'
import ProjectDisplay from '../projectsDisplay/projectDisplay'



const Projects = () => {
    return (
        <section id="projects">

            <div className="projectsHeader">

                <div className="projectsTitle"> My projects</div>
                <p className="projectsPara">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, dignissimos? Ipsum quisquam, recusandae natus ab repellat sapiente ea nemo voluptates officiis numquam, incidunt, sequi tempore beatae atque consequatur labore tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. At explicabo suscipit nam quisquam iste, aut quod perspiciatis maxime consequuntur corporis. In nam, quis iste adipisci consectetur quibusdam sequi placeat. Dolore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vitae ex dolor recusandae, sit earum quod quidem placeat rerum reiciendis maxime accusamus, adipisci repellat, cupiditate praesentium non quae quibusdam quia?</p>

            </div>

            <ProjectDisplay />
            
        </section>
    )
}

export default Projects