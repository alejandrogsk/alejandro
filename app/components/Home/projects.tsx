import { useEffect } from 'react'
import Wraper from '../Layout/wraper'
import img1 from "../../../public/show-1.png"
import img2 from "../../../public/show-2.png"
import img3 from "../../../public/show-3.png"
import img4 from "../../../public/show-4.png"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Subtitle from '../Subtitle'

const projectsList = [
    {
      id:4121,
      img: img1,
      title: "Vicente Gutiérrez Portfolio",
      role: "Developer",
      tools: ["Next 13", "Strapi CMS", "Tailwind CMS", "Framer Motion", "Vercel"],
      description: "This is a website for a brand new agency in Argentina, the goal was create a site that is fast and has good SEO ranking the the local area, so I’ve decided to use NextJs because it’s the best framwork for both. Besides Next I’ve used Tailwind CSS for the styling.",
      link: "Visit Site"
    },
    {
      id:14135145,
      img: img2,
      title: "PlanWeb Agency",
      role: "Developer",
      tools: ["Next 13", "Strapi CMS", "Tailwind CMS", "GSAP", "Vercel"],
      description: "This is a website for a brand new agency in Argentina, the goal was create a site that is fast and has good SEO ranking the the local area, so I’ve decided to use NextJs because it’s the best framwork for both. Besides Next I’ve used Tailwind CSS for the styling.",
      link: "Visit Site"
    },
    {
      id:198563,
      img: img3,
      title: "Shopify Headless Site",
      role: "Developer, Designer",
      tools: ["Next 13", "Shopify", "Tailwind CMS", "Framer Motion"],
      description: "This is a website for a brand new agency in Argentina, the goal was create a site that is fast and has good SEO ranking the the local area, so I’ve decided to use NextJs because it’s the best framwork for both. Besides Next I’ve used Tailwind CSS for the styling.",
      link: "Visit Site"
    },
    {
      id:4124121,
      img: img4,
      title: "Selected - Landing Page",
      role: "Developer",
      tools: ["Remix", "Contentful CMS", "Tailwind CMS", "Framer Motion", "Vercel"],
      description: "This is a website for a brand new agency in Argentina, the goal was create a site that is fast and has good SEO ranking the the local area, so I’ve decided to use NextJs because it’s the best framwork for both. Besides Next I’ve used Tailwind CSS for the styling.",
      link: "Visit Site"
    }
    
  ]
const Projects = () => {

  return (
    <Wraper customStyle="py-[10rem]">
        <Subtitle  subtitle='RECENT PROJECTS'/>
            <div className="grid grid-cols-1 gap-20 mt-10">
              {
                projectsList.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))
              }
            </div>
    </Wraper>
  )
}



const ProjectCard = ({project}: {project:any}) => {
    const {title, description, link, img} = project;
    return(
        <div className="grid grid-cols-1 gap-4 xl:gap-8">
            <ProjectCardImage image={img} title={title} />
            <ProjectCardText title={title} description={description} link={link} />
        </div>
    )
}

const ProjectCardImage = ({image, title}:{image:any, title:any}) => {
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
                src={image}
                alt={title}
                className="shadow-lg"
            />
        </div>
    )

}

const ProjectCardText = ({title, description, link}: any) => {
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
          `}>{link}</button>

        </div>
    )
}

export default Projects