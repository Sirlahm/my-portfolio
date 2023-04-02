import React, { useState } from "react";
import {motion} from 'framer-motion'

const tabs = [
  {
    id: "1",
    title: "Obig-Technology",
    job: "Fullstack Developer (Intern)",
    date: "January 2020 - July 2021",
    desp1: "Write Readable, Maintainable, Performant codes.",
    desp2:
      "Work with different technology: Javascript, Typescript, Reactjs, Nextjs, Nodejs, Mongodb, MySql, Express, Tailwind, Storybook, Chakra UI and Framer-Motion",
    desp3: "Collaborated with product team to implement new feature development",
  },
  {
    id: "2",
    job: "Frontend Developer (Contract)",
    title: "Spottr",
    date: "March 2022 - June 2022",
    desp1: "Redesigned existing application and implemented new features.",
     desp2: "Developed web products by bringing wireframes and designs to live.",
    desp3: "I have implemented the usage of JSON maps and globes in user interfaces, enabling the display of interactive and dynamic data visualizations.",
  },
  {
    id: "3",
    job: "Fullstack Developer ",
    title: "Raoatech IT-Electromech Limited",
    date: "August 2021 - Present",
    desp1: "Build intuitive,accessible,consistent,performant and well-tested products.",
    desp2: "Work with QA on developing testing processes, frameworks and automation strategies.",
    desp3: "Supervised and assist in training interns in the engineering team.",
  },
];

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const handleSetTab = (e) => {
    setCurrentTab(e.target.value);
  };
  return (
    <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
      <div className="flex md:justify-start md:flex-col md:w-[30%]  ">
        {tabs.map((tab, i) => (
          <button key={i}
            className={`flex-1 md:flex-grow-0 :text-lg font-semibold px-3 py-2 border-b-4 md:border-b-0 md:border-l-4 border-[#6fdcbfe6] text-[#333333] ${
              currentTab === tab.id ? "bg-[#6fdcbfe6]  border-[#FAF4B7] " : " "
            }`}
            value={tab.id}
            onClick={handleSetTab}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <motion.div initial={{ x: 350 }}
        animate={{ x: 0 }}
        className=" md:w-[60%]">
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div className="">
                <p className=" text-lg sm:text-xl font-black md:text-2xl md:font-bold">
                  {tab.job} @{" "}
                  <span className="text-[#6fdcbfe6]">{tab.title}</span>{" "}
                </p>
                <p className=" text-sm md:text-base font-semibold mt-1">{tab.date}</p>
                <ul>
                <li className="before:content-['▹'] before:absolute before:left-0 before:text-[#6fdcbfe6] before:text-2xl text-base md:text-xl pl-8 relative font-semibold  text-[#333333] font-mosk mt-5 ">
                    {tab.desp1}
                    </li>
                    <li className="before:content-['▹'] before:absolute before:left-0 before:text-[#6fdcbfe6] before:text-2xl text-base md:text-xl pl-8 relative font-semibold  text-[#333333] font-mosk mt-5 ">
                    {tab.desp2}
                    </li>
                    <li className="before:content-['▹'] before:absolute before:left-0 before:text-[#6fdcbfe6] before:text-2xl text-base md:text-xl pl-8 relative font-semibold  text-[#333333] font-mosk mt-5 ">
                    {tab.desp3}
                    </li>
                </ul>
                

              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tabs;
