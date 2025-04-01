import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from "../assets/logo.jpg"; // Adjust the path as necessary
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <nav 
     className="flex items-center justify-between bg-black text-white px-10 py-6">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="w-20" src={logo} alt="Logo" />
      </div>

      {/* Icons Section */}
      <div className="flex gap-4">
        
        <a
          href="https://www.linkedin.com/in/sabarish-k-000b54249/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-gray-400 transition duration-200" />
        </a>
        <a
          href="https://github.com/sabarishlk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl hover:text-gray-400 transition duration-200" />
        </a>
        <button className="bg-cyan-100 text-black" onClick={() => window.open("src/assets/Sabarish K.pdf", "_blank")}> Download CV</button>
      </div>
    </nav>
  );
};

export default Navbar;
