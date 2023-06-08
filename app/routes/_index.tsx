
import { ActionArgs, V2_MetaFunction, json } from "@remix-run/node";
import Grid from "~/components/Layout/Grid";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
import img1 from "../../public/show-1.png"
import img2 from "../../public/show-2.png"
import img3 from "../../public/show-3.png"
import {motion} from "framer-motion"
import Wraper from "~/components/Layout/wraper";
import Carousel from "~/components/Carousel";
import validator from "~/utils/formValidator";
import {
  validationError,
} from "remix-validated-form";
import ContactSections from "~/components/ContactSection";

export async function action({request}:ActionArgs) {
  const data = await validator.validate( await request.formData() );
  if (data.error) return validationError(data.error);

  const { clientName } = data.data;

  return json({ message: `Thanks ${clientName}. I will contact you as soon as possible.`}, {status: 200})
}

export default function Index() {
  const projects = [
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
      img: img1,
      title: "Vicente Gutiérrez Portfolio",
      role: "Developer",
      tools: ["Remix", "Contentful CMS", "Tailwind CMS", "Framer Motion", "Vercel"],
      description: "This is a website for a brand new agency in Argentina, the goal was create a site that is fast and has good SEO ranking the the local area, so I’ve decided to use NextJs because it’s the best framwork for both. Besides Next I’ve used Tailwind CSS for the styling.",
      link: "Visit Site"
    },
    {
      id:141354214145,
      img: img2,
      title: "PlanWeb Agency",
      role: "Developer",
      tools: ["Next 13", "Strapi CMS", "Tailwind CMS", "Framer Motion", "Vercel"],
      description: "This is a website for a brand new agency in Argentina, the goal was create a site that is fast and has good SEO ranking the the local area, so I’ve decided to use NextJs because it’s the best framwork for both. Besides Next I’ve used Tailwind CSS for the styling.",
      link: "Visit Site"
    },
    {
      id:19856412423,
      img: img3,
      title: "Shopify Headless Site",
      role: "Developer, Designer",
      tools: ["Next 13", "Dato CMS", "Tailwind CMS", "Framer Motion", "Vercel"],
      description: "This is a website for a brand new agency in Argentina, the goal was create a site that is fast and has good SEO ranking the the local area, so I’ve decided to use NextJs because it’s the best framwork for both. Besides Next I’ve used Tailwind CSS for the styling.",
      link: "Visit Site"
    }
  ]

  let h1Variants = {
    initial: {opacity:0, translateY: "200px"},
    animate: {opacity:1, translateY: 0, transition: {duration:1}},
  }


  let spanVariants1 = {
    initial: {opacity:0, translateY: "100%"},
    animate: {opacity:1, translateY: 0, transition: { duration:1, delay:0.4,  ease:[.15,.32,.35,.74] }},
  }

  let spanVariants2 = {
    initial: {opacity:0, translateY: "100%"},
    animate: {opacity:1, translateY: 0, transition: { duration:1, delay:0.6,  ease:[.15,.32,.35,.74] }},
  }

  let spanVariants3 = {
    initial: {opacity:0, translateY: "100%"},
    animate: {opacity:1, translateY: 0, transition: { duration:1, delay:0.8,  ease:[.15,.32,.35,.74] }},
  }

  return (
    <div style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.125 }}
    className="h-full"
    >
      <Grid />
      <Wraper customStyle="relative">

        
        <Wraper customStyle="flex items-center justify-start">
          <div className="flex flex-col gap-6 pt-[180px]">
            <motion.h1 className="text-[1.5rem]  xs:text-[1.875rem] md:text-[2.5rem] lg:text-[3.75rem] flex flex-col"
            initial="initial" animate="animate" variants={h1Variants}
            >
              <span className="overflow-hidden">
                <motion.span className="inline-flex" initial="initial" animate="animate" variants={spanVariants1} >Hi, I’m A Frontend <span className="hidden [@media(min-width:390px)]:block ml-[0.75rem]">Developer</span></motion.span>
              </span>
              <span className="overflow-hidden">
                <motion.span className="inline-flex" initial="initial" animate="animate" variants={spanVariants2}  ><span className="mr-[0.75rem] [@media(min-width:390px)]:hidden">Developer</span>Specialized In <span className="ml-[0.75rem] hidden [@media(min-width:390px)]:block">Headless</span></motion.span>
                </span>
              <span className="overflow-hidden">
                <motion.span className="inline-flex" initial="initial" animate="animate" variants={spanVariants3} ><span className="mr-[0.75rem] [@media(min-width:390px)]:hidden">Headless</span>Development</motion.span>
              </span>
              </motion.h1>
            <motion.p 
            initial={{translateY:100, opacity:0}} animate={{translateY:0, opacity:1}} transition={{ duration: 1, delay: 0.75}} 
            className="text-sm md:text-base lg:text-lg  mb-3 max-w-full lg:max-w-[65%]">I develop websites usgin a headles architecture to create sites more secure, fast and something. Whit this approach a company can save time and money in development, because...</motion.p>
            <motion.button 
            initial={{translateY:100, opacity:0}} animate={{translateY:0, opacity:1}} transition={{ duration: 1, delay: 1.5}} 
            className="uppercase block bg-black hover:bg-white text-white hover:text-black text-xs md:text-sm w-[150px] md:w-[170px] py-2 md:py-3 rounded-full shadow-lg	">Contact Me Now</motion.button>
          </div>
        </Wraper>

        <Wraper customStyle="py-[10rem]">
        <h2 className="uppercase text-sm lg:text-base">RECENT PROJECTS</h2>
            <div className="grid grid-cols-1 gap-20 mt-10">
              {
                projects.map((project) => (
                  <div key={project.id} className="grid grid-cols-1 xl:grid-cols-[60%_1fr] gap-4 xl:gap-10">
                    <div>
                      <img src={project.img} alt={project.title} className="shadow-lg"/>
                    </div>
                    <div className="flex flex-col py-3">
                      <h2 className="text-[24px] mb-4 mt-5">{project.title}</h2>
                      <div className="grid grid-cols-1">
                        <span className="text-base font-medium">Tools:</span>
                        <div className="text-base flex flex-wrap gap-2">
                          {
                            project.tools.map((tool) => (
                              <span className="border-black border-[1px] text-[10px] py-[2px] sm:text-xs sm:py-1 lg:text-sm  px-1.5 rounded-full">{tool}</span>
                              
                            ))
                          }

                        </div>

                      </div>
                      <p className="text-sm md:text-base mt-4 lg:mt-auto mb-4">{project.description}</p>

                      <button className="ml-auto lg:ml-0 block bg-black hover:bg-white text-white hover:text-black text-[16px] w-[130px] py-1 rounded-full shadow-lg	
                      h-[40px]
                      ">{project.link}</button>
          
                    </div>
                  </div>
                ))
              }
            </div>
        </Wraper>

        


        <Wraper>
        <h2 className="uppercase text-sm lg:text-base">TOOlS AND PLATFORMS</h2>
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
