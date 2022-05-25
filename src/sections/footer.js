import React from 'react';
import { motion } from "framer-motion";
import GithubIcon from "../components/icons/Github.js";
import LinkedinIcon from "../components/icons/Linkedin.js";
import MediumIcon from '../components/icons/Medium';

//add emailjs contact form in footer
export default function Footer() {
  return (
    <div className="flex flex-col items-center h-auto grid-cols-2 sm:grid">
      <div className="py-2 sm:py-6 sm:ml-6">
        <p className = "text-xs text-white lg:text-sm">© 2022 Raymond Yan</p>
      </div>
      <div className = "flex items-center justify-end mr-4 space-x-4">
      <motion.a
                href="https://github.com/raymond-design"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a> 
              
              <motion.a
                href="https://www.linkedin.com/in/raymond-yan-216b85200/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://medium.com/@raymonddesign"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <MediumIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
      </div>
      <div className = "pb-6 sm:pb-0"/>
    </div>
  )
}