import Datas from '../../datas/projectDatas'
import ProjectThumb from './projectThumbs'
import ProjectMisc from './projectMisc'

const ProjectDisplay = () => {

    return (

        <div className="projectsContainer">


            {Datas.map((data) => {
                console.log(data.tags)

                return (
                    <article className="thumb" key={data.id}>

                        <ProjectThumb title={data.title} cover={data.cover} />
                        <ProjectMisc description={data.description} tags={data.tags} />

                    </article>
                );
            })}

        </div>

    )
}

export default ProjectDisplay
