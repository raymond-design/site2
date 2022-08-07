import React from 'react';
import Header from '../sections/header';
import { motion } from "framer-motion";
import GithubIcon from "../components/icons/Github.js";
import LinkedinIcon from "../components/icons/Linkedin.js";
import MediumIcon from '../components/icons/Medium';
import EmailIcon from '../components/icons/Email';

import Typing from "../components/typical";

const roles = ["API Developer", "Cloud Computing Expert", "Medical Imaging Researcher", "Technical Writer", "Open Source Contributor"];
const Home = () => {
  return (
    <div className='bg-gradient-to-r from-blue-400 to-emerald-400'>
      <div className="relative flex items-center h-screen"> 
        <div className="z-0 max-w-6xl mx-auto sm:pl-16">
          <div className="flex justify-center text-center sm:text-left sm:grid sm:grid-cols-12">
            <div className="sm:col-span-5 md:col-span-4 "> {/*sm:col-span-10 md:col-span-9 */}
            
            <main className="w-full h-full">
              <section className="h-full max-w-5xl pt-4 mx-auto md:pt-8">
                <div className="flex flex-col items-center justify-center md:items-start">
                  <h4 className="text-lg text-gray-800 dark:text-white">
                    <span className="text-xl font-normal">Hello,</span> I'm
                  </h4>
                  <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
                    Raymond Yan.
                  </h1>
                  <div className="mt-5 text-2xl text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
                    <Typing />
                  </div>
                  <div className="flex mx-6 mt-6 text-xl text-white sm:mx-0">
                <p>
                  I'm a Computer Science student at Penn State with a focus in biomed software and cloud native!
                </p>
              </div>
                  <div className="flex items-center mt-4 space-x-6 md:mt-6">
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
                </div>
              </section>
              
            </main>
            </div>
            
            <div className="pl-10 sm:col-span-5 md:col-span-4"> {/*sm:col-span-10 md:col-span-9 */}
            
            <main className="w-full h-full">
              <section className="h-full max-w-5xl pt-4 mx-auto md:pt-8">
                <div className="flex flex-col items-center justify-center md:items-start">
                  <h4 className="text-lg text-gray-800 dark:text-white mt-7">
                    <span className="font-normal text-md"></span> 
                  </h4>
                  {roles.map((role, index) => (
                    <h4 className="text-lg text-gray-800 dark:text-white ">
                      <span className="font-normal text-md"></span>
                    </h4>
                    ))}
                  </div>
                  </section>
            </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home