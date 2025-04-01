
import aboutImg from '../assets/sabarish1.jpg'
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900  pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 0.5}} className="my-20 text-center text-4xl text-white">About
        <span className="text-neutral-400">   Me</span> </motion.h1>
        <div className="flex flex-wrap">
            <motion.div
            whileInView={{ opacity: 1,x:0}}
            initial={{opacity:0, x: -100}}
            transition={{ duration: 2}} className="w-full lg:w-1/2 lg:p-8">
            
            <div className="flex items-center justify-center">
                <img className="rounded-3xl" src={aboutImg} alt="about" />
            </div>
            </motion.div>
            <motion.div
            whileInView={{ opacity: 1,x:0}}
            initial={{opacity:0, x: 100}}
            transition={{ duration: 2}} className="w-full  lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6 text-white">
                 Driven by a strong interest in user interface design and interactive web development, I specialize in creating responsive and intuitive digital experiences.
                 My skill set includes proficiency in React.js, Tailwind CSS, HTML, CSS, and JavaScript, allowing me to develop clean, efficient, and maintainable front-end code.
                 I am well-versed in version control using Git and GitHub, ensuring smooth collaboration and workflow management. Additionally, I have hands-on experience working with MySQL for effective data integration.
                 I am committed to continuous learning and delivering solutions that combine functionality with visual appeal to meet user needs and business objectives.
                </p>
            </div>
            </motion.div>
        </div>
      
    </div>
  );
};

export default About;
