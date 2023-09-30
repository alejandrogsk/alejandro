import { useInView } from "react-intersection-observer";

const ProjectCardText = ({ title, description, externalUrl }: { title: string, description: string, externalUrl?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-[100px_1fr] lg:grid-cols-[200px_1fr_200px] py-3 gap-4">
      <h2 className={`col-start-1 row-start-1 uppercase text-sm lg:text-base duration-[750ms] ${inView ? "translate-y-0 in-cubic opacity-100" : "translate-y-[200px] opacity-0"}`}>{title}</h2>
      <p className={`row-start-2 sm:row-start-1 text-sm md:text-base  duration-[750ms] delay-[150ms] ${inView ? "translate-y-0 in-cubic opacity-100" : "translate-y-[200px] opacity-0"}`}>{description}</p>

      <div className={`duration-[750ms] delay-[300ms] ${inView ? "translate-y-0 in-cubic opacity-100" : "translate-y-[200px] opacity-0"}
          
          
          justify-self-end col-start-1 col-end-2  sm:col-start-2 sm:col-end-3 lg:col-start-3 col-end-4
          row-start-3 sm:row-start-2 lg:row-start-1
          `}>

        {
          externalUrl &&
          <a href={externalUrl} className={`
          ml-auto lg:ml-0 block bg-black hover:bg-white text-white hover:text-black text-sm w-[100px] py-1 rounded-full shadow-lg	
          h-[30px] text-center
          `}
            target="_blank" rel="noopener noreferrer"
            style={{ transition: "background 300ms, color 300ms" }}
          >View More</a>
        }
      </div>

    </div>
  )
}
export default ProjectCardText;