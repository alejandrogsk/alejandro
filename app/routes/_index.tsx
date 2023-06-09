
import { ActionArgs, V2_MetaFunction, json } from "@remix-run/node";
import Grid from "~/components/Layout/Grid";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import {motion} from "framer-motion"
import Wraper from "~/components/Layout/wraper";
import Carousel from "~/components/Carousel";
import validator from "~/utils/formValidator";
import {
  validationError,
} from "remix-validated-form";
import ContactSections from "~/components/ContactSection";
import Projects from "~/components/Home/projects";
import Subtitle from "~/components/Subtitle";

export async function action({request}:ActionArgs) {
  const data = await validator.validate( await request.formData() );
  if (data.error) return validationError(data.error);

  const { clientName } = data.data;

  return json({ message: `Thanks ${clientName}. I will contact you as soon as possible.`}, {status: 200})
}

export default function Index() {
 

  let h1Variants = {
    initial: {opacity:0, translateY: "200px"},
    animate: {opacity:1, translateY: 0, transition: {duration:.7, ease:[.15,.32,.35,.74]}},
  }


  let spanVariants1 = {
    initial: {opacity:0, translateY: "100%"},
    animate: {opacity:1, translateY: 0, transition: { duration:.5, delay:0,  ease:[.15,.32,.35,.74] }},
  }

  let spanVariants2 = {
    initial: {opacity:0, translateY: "100%"},
    animate: {opacity:1, translateY: 0, transition: { duration:.5, delay:0.1,  ease:[.15,.32,.35,.74] }},
  }

  let spanVariants3 = {
    initial: {opacity:0, translateY: "100%"},
    animate: {opacity:1, translateY: 0, transition: { duration:.5, delay:0.2,  ease:[.15,.32,.35,.74] }},
  }

  return (
    <div style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.125 }}
    className="h-full"
    >
      <Grid />
      <Wraper customStyle="relative">

        
        <Wraper customStyle="flex items-center justify-start">
          <div className="flex flex-col gap-6 pt-[180px]">
            <motion.h1 className="text-[1.6rem]  xs:text-[1.875rem] md:text-[2.5rem] lg:text-[3.75rem] flex flex-col "
            initial="initial" animate="animate" variants={h1Variants}
            >
              <span className="overflow-hidden">
              <motion.span className="inline-flex" initial="initial" animate="animate" variants={spanVariants1} >Hi, I’m A Frontend Developer</motion.span>
              </span>
              <span className="overflow-hidden">
              <motion.span className="inline-flex" initial="initial" animate="animate" variants={spanVariants2} >Specialized In Headless</motion.span>
              </span>
              <span className="overflow-hidden">

              <motion.span className="inline-flex" initial="initial" animate="animate" variants={spanVariants3} >Development</motion.span>
              </span>
              </motion.h1>
            <motion.p 
            initial={{translateY:100, opacity:0}} animate={{translateY:0, opacity:1}} transition={{ duration: .6, delay: 0.2}} 
            className="text-sm md:text-base lg:text-lg  mb-3 max-w-full lg:max-w-[65%]">I develop websites usgin a headles architecture to create sites more secure, fast and something. Whit this approach a company can save time and money in development, because...</motion.p>
            <motion.button 
            initial={{translateY:100, opacity:0}} animate={{translateY:0, opacity:1}} transition={{ duration: .7, delay: 0.2}} 
            className="uppercase block bg-black hover:bg-white text-white hover:text-black text-xs md:text-sm w-[150px] md:w-[170px] py-2 md:py-3 rounded-full shadow-lg	">Contact Me Now</motion.button>
          </div>
        </Wraper>

        
        <Projects />
        


        <Wraper>
          <Subtitle subtitle="TOOlS AND PLATFORMS"/>
          <div className="mt-10">
              <Carousel />
          </div>
        </Wraper>

        <Wraper>
        <ContactSections />
        </Wraper>
      </Wraper>
    </div>
  );
}
