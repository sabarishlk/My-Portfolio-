import React from 'react';
import {motion} from "framer-motion";
const Contacts = () => {
  // Contact data inside the component
  const contactData = {
    address: "No,7 K.P.S Nagar, Balobananthavanam, Thanjavur-613001",
    phoneNo: "9003349541",
    email: "sabarishkannan2003@gmail.com",
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 0.5}} className="my-20 text-center text-4xl text-white font-bold">Get in Touch</motion.h1>
      <motion.div
            whileInView={{ opacity: 1,x:0}}
            initial={{opacity:0, x: 100}}
            transition={{ duration: 2}} className="text-center tracking-tight text-white">
        <p className="my-4">
          <span className="font-semibold">Address:</span> {contactData.address}
        </p>
        <p className="my-4">
          <span className="font-semibold">Phone:</span> {contactData.phoneNo}
        </p>
        <p className="my-4">
          <span className="font-semibold">Email:</span>{' '}
          <a
            href={`mailto:${contactData.email}`}
            className="border-b border-cyan-400 text-cyan-400 hover:text-cyan-200"
          >
            {contactData.email}
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Contacts;
