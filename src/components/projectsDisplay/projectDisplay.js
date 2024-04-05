import Datas from '../../datas/projectDatas'

const ProjectDisplay = () => {

    return (

        <div className="projectsContainer">


            {Datas.map((data) => {

                return (
                    <article className="thumb" key={data.id} >

                        <div className="projectGeneral"  >

                            <div className="projectThumb" >

                                <div className="thumb-overlay"></div>
                                <img src={data.cover} alt={data.title} className="projectImg" />
                                <h2 className="projectThumbTitle">{data.title}</h2>
                            </div>


                            <div className="projectMisc" >
                                <p className="projectDescription" >
                                    {data.description}
                                </p>

                                <div className="projectTags">
                                    {data.tags.map((tag, i) =>
                                        <div className="tags" key={i} >
                                            {tag}
                                        </div>
                                    )}
                                </div>


                                <div className="projectLinks">
                                    <a href="#home"> <button className='projectLinksBtn'>Demo</button>  </a>
                                    <a href="#home"> <button className='projectLinksBtn'>Github</button></a>
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


