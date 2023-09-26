import { motion } from 'framer-motion'
import Wraper from '../Layout/wraper';

const HeroSection = ({ title, subtitle }:{title: string[], subtitle: string}) => {
    //Framer Motion Variables for the h1
    let h1Variants = {
        initial: {opacity:0, translateY: "200px"},
        animate: {opacity:1, translateY: 0, transition: {duration:.7, ease:[.15,.32,.35,.74]}},
    }
  return (
    <Wraper customStyle="flex items-center justify-start">
          <div className="h-screen flex flex-col justify-center gap-6">
            
            <motion.h1 className="text-[1.5rem]  xs:text-[1.875rem] md:text-[2.5rem] lg:text-[3.75rem] flex flex-col "
            initial="initial" animate="animate" variants={h1Variants}
            >
              {
                title.map((tText:string, i:number) => {

                  let delay = i * 0.15;

                  let spanVariants = {
                    initial: {opacity:0, translateY: "100%"},
                    animate: {opacity:1, translateY: 0, transition: { duration:.5, delay:delay,  ease:[.15,.32,.35,.74] }},
                  }

                  return(
                    <span key={i} className="overflow-hidden">
                      <motion.span className="inline-flex" initial="initial" animate="animate" variants={spanVariants} >{tText}</motion.span>
                    </span>
                  )
                })
              }
              </motion.h1>
            <motion.p 
            initial={{translateY:100, opacity:0}} animate={{translateY:0, opacity:1}} transition={{ duration: .6, delay: 0.2}} 
            className="text-sm md:text-base lg:text-lg  mb-3 max-w-full lg:max-w-[50%]">{subtitle}</motion.p>
          </div>
        </Wraper>
  )
}

export default HeroSection