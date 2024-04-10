import Datas from '../../datas/projectDatas'

const ProjectDisplay = () => {

    return (

        <div className="projectsContainer">


            {Datas.map((data) => {

                let isDemoUrl = data.demoUrl
                
                return (
                    <article className="thumb" key={data.id} >

                        <h2 className="projectThumbTitle">{data.title}</h2>

                        <div className="projectGeneral"  >

                            <div className="projectThumb" >

                                <img src={data.cover} alt={data.title} className="projectImg" />

                            </div>

                            <div className="projectMisc" >
                                <p style={{ whiteSpace: 'pre-line' }} className="projectDescription" >
                                    {data.description}
                                </p>

                                <div className="projectTags">
                                    {data.tags.map((tag, i) =>

                                        <div className="tags" key={i} >
                                            {tag}

                                        </div>

                                    )}

                                    <div className="projectLinks">

                                        {isDemoUrl ? <a href={data.demoUrl} target='_blanck'> <button className='projectLinksBtn'>Démo</button></a> : ""}
                                        <a href={data.gitHubUrl} target='_blanck'> <button className='projectLinksBtn'>Github</button></a>

                                    </div>

                                </div>



                            </div>

                        </div>
                    </article>
                );

            })}
        </div>

    )
}

export default ProjectDisplay


