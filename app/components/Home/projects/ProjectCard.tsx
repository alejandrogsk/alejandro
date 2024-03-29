import { Project } from "types/Project";
import ProjectCardImage from "./ProjectCardImage";
import ProjectCardText from "./ProjectCardText";

const ProjectCard = ({project}: {project:Project}) => {
    const {title, description, image, externalUrl } = project;
    return(
        <div className="grid grid-cols-1 gap-4 xl:gap-8">
            {image && <ProjectCardImage image={image} />}
            <ProjectCardText title={title} description={description} externalUrl={externalUrl} />
        </div>
    )
}
export default ProjectCard;