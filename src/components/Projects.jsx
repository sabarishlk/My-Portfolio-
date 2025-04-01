import React from 'react';
import projects from '../constants/projectsData';
import {motion} from "framer-motion";

const Projects = () => {
  return (
    <section className="py-10">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 0.5}} className="text-4xl font-bold text-white mb-8 text-center"> Projects </motion.h1>
      <motion.div
            whileInView={{ opacity: 1,x:0}}
            initial={{opacity:0, x: -100}}
            transition={{ duration: 2}} className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-neutral-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{project.title}</h3>
            <p className="text-white mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
