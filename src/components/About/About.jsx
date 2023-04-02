import React from "react";
import Zoom from "react-reveal/Zoom";

import Ridwan from "../../assets/images/rid.jpeg";
const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "SASS",
    "JAVASCRIPT",

    "REACTJS",
    "REDUX",
    "NEXTJS",
    "TYPESCRIPT",
    "NODE",
    "GIT",
    "EXPRESS",
    "MONGODB",
    "PHP",
    "LARAVEL",
  ];

  return (
    <div
      id="about"
      className="bg-[#F7F5F2] py-24 md:py-32 lg:px-0 md:px-6 px-3"
    >
      <div className=" max-w-5xl mx-auto  ">
        <div className="flex justify-between space-x-4 items-center">
          <p className=" text-xl sm:text-2xl md:text-3xl font-black md:tracking-[5px]  font-mosk text-[#333333]">
            01. About Me
          </p>
          <span className=" h-[3px] md:h-[5px] bg-[#333333] flex-1 "></span>
        </div>

        <div
          className="flex  flex-col mt-20 md:flex-row  md:justify-between text-center md:text-left
        "
        >
          <div className=" order-2 md:order-1 w-full md:w-[48%] lg:w-[50%]">
            <p className="mt-8 text-lg smd:text-xl font-mosk text-[#333333]">
              My name is Ridwan Abdulsalam, a highly skilled Fullstack Developer
              based in Lagos, Nigeria. My primary focus as a Fullstack Developer
              is to create dynamic, responsive, and user-friendly interfaces
              that deliver a seamless user experience. I specialize in
              designing and developing secure servers, databases, and APIs while
              also administering them to ensure peak performance. My ultimate
              goal is to leverage my expertise to create robust and innovative
              solutions that meet the unique needs of clients and end-users.
            </p>

            <div>
              <p className="mt-8 text-lg smd:text-xl font-mosk text-[#333333]">
                Here are Stacks I've been working with:
              </p>
              <ul className="grid grid-cols-2">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="before:content-['▹'] before:absolute before:left-0 before:text-[#333333] before:text-2xl text-lg smd:text-xl pl-0 md:pl-5 lg:pl-8 relative font-semibold  text-[#333333] font-mosk mt-5 "
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Zoom duration={1000}>
            <div className="order-1 md:order-2 w-full flex justify-center md:block md:w-[47%] lg:w-[35%] md:self-center">
              <div className="h-[350px] w-[430px] border-2 border-[#333333] boxShadow hover:-translate-y-4 transition-all">
                <img
                  src={Ridwan}
                  alt="ridwan-pic "
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default About;
