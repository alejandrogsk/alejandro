import { useEffect } from 'react'
import Wraper from '../Layout/wraper'
import img1 from "../../../public/show-1.png"
import img2 from "../../../public/show-2.png"
import img3 from "../../../public/show-3.png"
import img4 from "../../../public/show-4.png"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Subtitle from '../Subtitle'
import { Project } from 'types/Project'
import { Image } from 'types/Image'


const Projects = ({projectsList}: { projectsList: Project[]}) => {

  return (
    <Wraper customStyle="py-[10rem]">
        <Subtitle  subtitle='RECENT PROJECTS'/>
            <div className="grid grid-cols-1 gap-20 mt-10">
              {
                projectsList.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))
              }
            </div>
    </Wraper>
  )
}



const ProjectCard = ({project}: {project:Project}) => {
    const {title, description, image } = project;
    return(
        <div className="grid grid-cols-1 gap-4 xl:gap-8">
            <ProjectCardImage image={image} />
            <ProjectCardText title={title} description={description} />
        </div>
    )
}

const ProjectCardImage = ({image}:{image:Image}) => {
    const [ ref, inView ] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });
    const controls = useAnimation();


    useEffect(() => {
        if(inView) {
            console.log("Image in view")
            controls.start("visible")
        }
    }, [inView, controls])


    const variants = {
        initial: {
            translateY: 200,
            opacity:0
        },
        visible: {
            translateY: 0,
            opacity:1,
            transition: {
                duration: .75,
                ease:[.15,.32,.35,.74]
            }
        }
    }

    return(
        <div ref={ref}>
            <motion.img 
                initial="initial"
                animate={controls}
                variants={variants}
                src={image.url}
                alt={image.description??"image"}
                className="shadow-lg"
            />
        </div>
    )

}

const ProjectCardText = ({title, description}: { title: string, description:string}) => {
    const [ ref, inView ] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });    

    
    return(
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-[100px_1fr] lg:grid-cols-[200px_1fr_200px] py-3 gap-4">
          <h2 className={`col-start-1 row-start-1 uppercase text-sm lg:text-base duration-[750ms] ${inView ? "translate-y-0 in-cubic opacity-100" : "translate-y-[200px] opacity-0"}`}>{title}</h2>
          <p className={`row-start-2 sm:row-start-1 text-sm md:text-base  duration-[750ms] delay-[150ms] ${inView ? "translate-y-0 in-cubic opacity-100" : "translate-y-[200px] opacity-0"}`}>{description}</p>

          <button className={`duration-[750ms] delay-[300ms] ${inView ? "translate-y-0 in-cubic opacity-100" : "translate-y-[200px] opacity-0"}
          ml-auto lg:ml-0 block bg-black hover:bg-white text-white hover:text-black text-sm w-[100px] py-1 rounded-full shadow-lg	
          h-[30px] justify-self-end col-start-1 col-end-2  sm:col-start-2 sm:col-end-3 lg:col-start-3 col-end-4
          row-start-3 sm:row-start-2 lg:row-start-1
          `}>View More</button>

        </div>
    )
}

export default Projects