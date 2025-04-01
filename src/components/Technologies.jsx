
import { RiReactjsLine} from "react-icons/ri";
import { DiJava, DiPython, DiMysql, DiCss3, DiHtml5 } from "react-icons/di";
import { SiTailwindcss, SiC, SiJavascript } from "react-icons/si";
import {motion} from "framer-motion";


  

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl text-white">Technologies</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            {/* HTML5 */}
                <motion.div
      animate={{
        y: [10, -10], // Moves up and down
      }}
      transition={{
        duration: 5, // Adjust speed
        ease: "linear",
        repeat: Infinity, // Infinite loop
        repeatType: "reverse", // Smooth reversing
      }}
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className="text-7xl text-orange-600" />
                </motion.div>
            {/* CSS3 */}
                <motion.div
      animate={{
        y: [-10, 10], // Moves up and down
      }}
      transition={{
        duration: 1, // Adjust speed
        ease: "linear",
        repeat: Infinity, // Infinite loop
        repeatType: "reverse", // Smooth reversing
      }} className="rounded-2xl border-4 border-neutral-800 p-4">
                 <DiCss3 className="text-7xl text-blue-400" />
                 </motion.div>
             {/* Tailwind CSS */}
                <motion.div
      animate={{
        y: [10, -10], // Moves up and down
      }}
      transition={{
        duration: 1, // Adjust speed
        ease: "linear",
        repeat: Infinity, // Infinite loop
        repeatType: "reverse", // Smooth reversing
      }} className="rounded-2xl border-4 border-neutral-800 p-4">
                 <SiTailwindcss className="text-7xl text-cyan-500" />
                 </motion.div>
            {/* JavaScript */}
                <motion.div
      animate={{
        y: [-10, 10], // Moves up and down
      }}
      transition={{
        duration: 1, // Adjust speed
        ease: "linear",
        repeat: Infinity, // Infinite loop
        repeatType: "reverse", // Smooth reversing
      }} className="rounded-2xl border-4 border-neutral-800 p-4">
                 <SiJavascript className="text-7xl text-yellow-400" />
                 </motion.div>
            {/*React*/}
                <motion.div
      animate={{
        y: [10, -10], // Moves up and down
      }}
      transition={{
        duration: 1, // Adjust speed
        ease: "linear",
        repeat: Infinity, // Infinite loop
        repeatType: "reverse", // Smooth reversing
      }} className="rounded-2xl border-4 border-neutral-800 p-4">
                 <RiReactjsLine className="text-7xl text-cyan-400" />
                 </motion.div>
            {/* C */}
                <motion.div
      animate={{
        y: [-10, 10], // Moves up and down
      }}
      transition={{
        duration: 1, // Adjust speed
        ease: "linear",
        repeat: Infinity, // Infinite loop
        repeatType: "reverse", // Smooth reversing
      }} className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiC className="text-7xl text-blue-300" />
                </motion.div>

             {/* Java */}
                <motion.div
      animate={{
        y: [10, -10], // Moves up and down
      }}
      transition={{
        duration: 1, // Adjust speed
        ease: "linear",
        repeat: Infinity, // Infinite loop
        repeatType: "reverse", // Smooth reversing
      }} className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava className="text-7xl text-orange-500" />
                </motion.div>

            {/* Python */}
                <motion.div
      animate={{
        y: [-10, 10], // Moves up and down
      }}
      transition={{
        duration: 1, // Adjust speed
        ease: "linear",
        repeat: Infinity, // Infinite loop
        repeatType: "reverse", // Smooth reversing
      }} className="rounded-2xl border-4 border-neutral-800 p-4">
                 <DiPython className="text-7xl text-yellow-400" />
                 </motion.div>
            {/* MySQL */}
                <motion.div
      animate={{
        y: [10, -10], // Moves up and down
      }}
      transition={{
        duration: 1, // Adjust speed
        ease: "linear",
        repeat: Infinity, // Infinite loop
        repeatType: "reverse", // Smooth reversing
      }} className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className="text-7xl text-blue-500" />
                </motion.div>

      
      
        </div>
      
    </div>
  );
};

export default Technologies;
