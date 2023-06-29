
import { ActionArgs, V2_MetaFunction, json } from "@remix-run/node";


export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import {motion} from "framer-motion"
import Wraper from "~/components/Layout/wraper";
import validator from "~/utils/formValidator";
import {
  validationError,
} from "remix-validated-form";
import ContactSections from "~/components/ContactSection";
import Projects from "~/components/Home/projects";
import Subtitle from "~/components/Subtitle";
import { gqlClient } from "~/graphql/client";
import { HOME_PAGE } from "~/graphql/queries/homePage";
import { useLoaderData } from "@remix-run/react";
import { HomePage } from "types/HomePage";
import { Image } from "types/Image";
import ToolsAndPlatforms from "~/components/Home/ToolsAndPlatforms";

export async function action({request}:ActionArgs) {
  const data = await validator.validate( await request.formData() );
  if (data.error) return validationError(data.error);

  const { clientName } = data.data;

  return json({ message: `Thanks ${clientName}. I will contact you as soon as possible.`}, {status: 200})
}

export const loader = async (): Promise<{ ok: boolean; data:  HomePage }> => {
  const client = gqlClient();
  const reqHome = await client.request<{ homePage: any }>(HOME_PAGE, {
    id: "1qwQQiqgCH7aLvH4KdgrHa" //Home page ID
  });


  return { ok: true, data: reqHome.homePage };
};

export default function Index() {
 

  let h1Variants = {
    initial: {opacity:0, translateY: "200px"},
    animate: {opacity:1, translateY: 0, transition: {duration:.7, ease:[.15,.32,.35,.74]}},
  }

  const { data } = useLoaderData();

  const { title, subtitle,  logosWhiteVersionCollection, recentProjectsCollection, contactText, profilePicture  } = data;

  
  return (
    <div style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.125 }}
    className="h-full"
    >
      <Wraper customStyle="relative">

        
        <Wraper customStyle="flex items-center justify-start">
          <div className="flex flex-col gap-6 pt-[180px]">
            
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
            className="text-sm md:text-base lg:text-lg  mb-3 max-w-full lg:max-w-[65%]">{subtitle}</motion.p>
          </div>
        </Wraper>

        
        <Projects projectsList={recentProjectsCollection.items} />
        


        <ToolsAndPlatforms logosWhiteVersionCollection={logosWhiteVersionCollection} />

        <Wraper>
        <ContactSections contactText={contactText} profilePicture={profilePicture}/>
        </Wraper>
      </Wraper>
    </div>
  );
}
