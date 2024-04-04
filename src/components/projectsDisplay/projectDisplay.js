import Datas from '../../datas/projectDatas'

const ProjectDisplay = () => {

    return (

        <div className="projectsContainer">


            {Datas.map((data) => {
                console.log(data.tags)

                return (
                    <article className="thumb" key={data.id}>

                        <div className="projectGeneral">

                            <div className="projectThumb" >

                                <div className="thumb-overlay"></div>
                                <img src={data.cover} alt={data.title} className="projectImg" />
                                <h2 className="projectThumbTitle">{data.title}</h2>
                            </div>


                            <div className="projectMisc">
                                <p className="projectDescription" >
                                    {data.description}
                                </p>

                                <div className="projectsTags">
                                    {data.tags}
                                </div>

                                <div className="projectLinks">
                                    <a href="#home"> Demo </a>
                                    <a href="#home"> Lien Repo</a>
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
