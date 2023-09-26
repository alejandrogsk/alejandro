import { Image } from "types/Image";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ProjectCardImage = ({image}:{image:Image}) => {
    const [ ref, inView ] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });
    const controls = useAnimation();


    useEffect(() => {
        if(inView) {
            controls.start("visible")
            console.log('Image visible: ')
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

export default ProjectCardImage