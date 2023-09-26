import { Project } from "types/Project"
import Wraper from "~/components/Layout/wraper"
import Subtitle from "~/components/Subtitle"
import ProjectCard from "./ProjectCard"

const Projects = ({projectsList}:{ projectsList: Project[]}) => {
    return (
      <Wraper customStyle="py-[10rem]">
          <Subtitle  subtitle='RECENT PROJECTS'/>
              <div className="grid grid-cols-1 gap-40 mt-10">
                {
                  projectsList.map((project) => (
                      <ProjectCard key={project.title} project={project} />
                  ))
                }
              </div>
      </Wraper>
    )
  }
export default Projects;