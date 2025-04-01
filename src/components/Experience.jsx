import { EXPERIENCES } from "../constants";
import {motion} from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-5 px-5">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 0.5}}className="my-20 text-center text-4xl text-white">Experience</motion.h1>
      <motion.div
            whileInView={{ opacity: 1,x:0}}
            initial={{opacity:0, x: -100}}
            transition={{ duration: 2}}>
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className='mb-8 flex-wrap lg:justify-center'>
                <div className="w-full lg:w-1/4">
                <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold text-white"> 
                    {experience.role} - <span className="text-sm text-cyan-400">
                        {experience.company}</span>
                        </h6>
                        <p className='mb-4 text-neutral-400 text-white'> {experience.description}</p>
                        {experience.technologies.map((tech,index) => (
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-400">{tech}</span>
                        ))}
              </div>  
              </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
