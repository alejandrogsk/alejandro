import { motion } from "framer-motion";
const Grid = () => {
    const gridVariables = {
        initial: {
            height: 0,
        },
        animate: {
            height: "100%",
        },
    };
    return (
        <div className="fixed flex  top-0 left-0 right-0 bottom-0 justify-between
        max-w-[2000px] mx-[0.5rem] sm:mx-[1rem] md:mx-[1.56rem] lg:mx-[3.125rem] xl:mx-[3.5rem] big:mx-[4.5rem] bigXl:mx-auto
        " style={{zIndex: -1}}>
           
            <motion.span
                variants={gridVariables}
                initial="initial"
                transition={{ duration: 1, delay: 0}}
                animate="animate"
                className="h-full w-[1px] bg-[#E0E0E0]"
            ></motion.span>
            <motion.span
                variants={gridVariables}
                initial="initial"
                transition={{ duration: 1, delay: 0.3 }}
                animate="animate"
                className="h-full w-[1px] bg-[#E0E0E0]"
            ></motion.span>
            <motion.span
                variants={gridVariables}
                initial="initial"
                transition={{ duration: 1, delay: 0.6 }}
                animate="animate"
                className="h-full w-[1px] bg-[#E0E0E0]"
            ></motion.span>
             <motion.span
                variants={gridVariables}
                initial="initial"
                transition={{ duration: 1, delay: 0.9 }}
                animate="animate"
                className="h-full w-[1px] bg-[#E0E0E0] hidden sm:block"
            ></motion.span>
            <motion.span
                variants={gridVariables}
                initial="initial"
                transition={{ duration: 1, delay: 1.2 }}
                animate="animate"
                className="h-full w-[1px] bg-[#E0E0E0] hidden lg:block"
            ></motion.span>
        </div>
    );
};

export default Grid;
