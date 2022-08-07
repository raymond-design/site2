 import React from 'react';
import Xp from '../components/xp-card';

export default function Exp() {
  return (
  <div className="h-auto ">
    <div className="w-full max-w-md px-2 py-16 text-center sm:px-0">
      <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
        Experience
      </h1>
    </div>
    <div className="z-0 max-w-6xl mx-auto text-gray-100 md:pl-16">
      {xpdata.map((xp) => (
        <div className='mb-10'>
          <Xp
            title = {xp.title}
            time = {xp.time}
            role = {xp.role} 
            desc = {xp.desc}
            learned = {xp.learned}
            link = {xp.link}
            cmpn = {xp.cmpn}
          />
        </div>
      ))}
    </div>
  </div>
  );
}
const xpdata = [
  {
    title: "Data Center Intern",
    cmpn: "Element Critical",
    time: "June 2021 - August 2021",
    role: "",
    desc: "blah",
    learned: "",
    link: "https://www.elementcritical.com/",
  },
  {
    title: "Software Dev, Researcher",
    cmpn: "UpRads Systems",
    time: "October 2021 - August 2022",
    role: "",
    desc: "I got to become familiar with medical imaging standards, open source servers like Orthanc and DCM4CHEE, and the CornerstoneJS ecosystem. This experience is what got me interested in healthcare software.",
    learned: "",
    link: "",
  },
  {
    title: "Training Director",
    cmpn: "Nittany Data Labs",
    time: "May 2022 - Present",
    role: "",
    desc: "Nittany Data Labs is Penn State's data science student organization. As training director, I mainly maintain the club learning resources (python packages, GitHub repos, etc) and make sure students get the most out of our training programs (cloud certifications, workshops, etc).",
    learned: "",
    link: "https://ndl.psu.edu/",
  }
];