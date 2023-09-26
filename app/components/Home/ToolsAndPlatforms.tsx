import React, { useEffect } from 'react'
import Wraper from '../Layout/wraper'
import Subtitle from '../Subtitle'
import {motion, useAnimationControls} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Logos = {
    items: Logo[]
}

type Logo = {
    url: string,
    description: string
}

const ToolsAndPlatforms = ({logosWhiteVersionCollection}: {logosWhiteVersionCollection:Logos}) => {
    const [ ref, inView] = useInView();
    const controls = useAnimationControls()
    useEffect(() => {
        if(inView){
           controls.start("animate")
        }
    }, [controls, inView])

    const variants = {
        initial: { 
            translateY: 100,
            opacity:0
        }, 
        animate: { 
            translateY: 0,
            opacity:1,
            
        }
    }

  return (
    <Wraper>
    <Subtitle subtitle="TOOLS AND PLATFORMS"/>
    <div className="mt-10" ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3s lg:grid-cols-5 gap-20
      items-center justify-center
      ">
        {
            logosWhiteVersionCollection.items.map((logo:Logo, i:number) => {

                return(
                    <motion.img
                        key={`${logo.description}-${i}`}
                        initial="initial"
                        variants={variants}
                        animate={controls}
                        transition={
                            {duration: .5,
                                ease:[.15,.32,.35,.74]}
                            
                        }
                        src={logo.url} 
                        alt={logo.description || `Logo Image`} 
                        height={50}
                        className="max-h-[30px] md:max-h-[40px] lg:max-h-[50px] w-auto"
                    />
                )
            })
        }
      </div>
    </div>
  </Wraper>
  )
}

export default ToolsAndPlatforms