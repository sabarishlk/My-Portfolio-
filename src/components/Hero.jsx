import profilepic from "../assets/sabarish4.jpg";
import { motion } from "framer-motion";

const containerVariants = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { 
      duration: 0.5,
      delay: delay 
    },
  }
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-5 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
             variants={containerVariants(0.5)} // Adjust delay as needed
             initial="hidden"
             animate="visible"
    
            className=" pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white px-10 py-6" 
            >
              K.Sabarish
            </motion.h1> 
            <motion.span 
            variants={containerVariants(1)} // Adjust delay as needed
            initial="hidden"
            animate="visible"
   
            className="  bg-gradient-to-r from-blue-100 via-slate-500 to-cyan-200 bg-clip-text text-4xl tracking-tight text-transparent px-10 py-6">
              Front-End Developer
            </motion.span>
            <motion.p 
            variants={containerVariants(1.5)} // Adjust delay as needed
            initial="hidden"
            animate="visible"
   
            className="my-0 max-w-xl py-6 font-light tracking-tighter text-white px-10 py-6">
            I’m a passionate Front-End Developer who enjoys crafting responsive, interactive, and visually appealing websites. 
            With a strong foundation in HTML, CSS, JavaScript, React.js, Tailwind CSS, Git & GitHub, and MySQL,   I focus on building seamless user experiences and clean, efficient code. 
            Explore my work, skills, and projects to see how I bring ideas to life through thoughtful and dynamic web development.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center px-10 py-5">
            <motion.img 
            variants={containerVariants(2)} // Adjust delay as needed
            initial="hidden"
            animate="visible"
   
            src={profilepic} alt="k.sabarish" className="w-40px h-40px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
