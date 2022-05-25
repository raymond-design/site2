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
            desc = {xp.desc}
            link = {xp.link}
          />
        </div>
      ))}
    </div>
  </div>
  );
}
const xpdata = [
  {
    title: "Data Center Intern @Element Critical",
    time: "June 2021 - August 2021",
    desc: "blah",
    link: "https://www.elementcritical.com/",
  },
  {
    title: "Co-Founder/CTO @UpRads Systems",
    time: "June 2021 - August 2021",
    desc: "blah",
    link: "https://www.elementcritical.com/",
  },
  {
    title: "Training Director, Cloud Specialist @Nittany Data Labs",
    time: "June 2021 - August 2021",
    desc: "blah",
    link: "https://www.elementcritical.com/",
  }
];