import React from "react";
import { motion } from "framer-motion";
import { useIsMedium } from "../hooks";
import { Laptop, Lamp } from "../Svgs";

import Button from "../Button/Button";

function Hero() {
  const useIsMediu = useIsMedium();

  const variants = useIsMediu
    ? {
        hidden: {
          x: "-1000vw",
        },
        visible: { y: "-50%", x: "-50%" },
      }
    : {
        hidden: {
          x: "-200vw",
        },
        visible: { x: 0 },
      };

  return (
    <>
      <motion.div
        initial={{ y: 350 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 2 }}
        className=" z-[10]  bg-transparent sm:bg-transparent fixed bottom-0 left-0 sm:left-[20px] lg:left-[40px] right-0 sm:right-auto w-[100%] mx-auto sm:m-0 sm:w-auto p-5 sm:p-0"
      >
        <ul className=' flex flex-row sm:flex-col justify-center space-x-16  sm:justify-between  sm:space-x-0  sm:space-y-6  after:hidden sm:after:content-[""]  after:mt-6 after:w-[2px] sm:after:block after:h-[90px] after:bg-primary after:mx-auto'>
          <li className=" hover:-translate-y-1 transition-all">
            <a href="mailto:riliwanademola@yahoo.com">
              <svg
                fill="#6fdcbfe6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="30px"
                height="30px"
              >
                <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 14 6 L 36 6 C 40.430666 6 44 9.5693339 44 14 L 44 36 C 44 40.430666 40.430666 44 36 44 L 14 44 C 9.5693339 44 6 40.430666 6 36 L 6 14 C 6 9.5693339 9.5693339 6 14 6 z M 13 15 C 11.35503 15 10 16.35503 10 18 L 10 32 C 10 33.64497 11.35503 35 13 35 L 37 35 C 38.64497 35 40 33.64497 40 32 L 40 18 C 40 16.35503 38.64497 15 37 15 L 13 15 z M 13.414062 17 L 36.583984 17 L 27.677734 25.892578 C 26.18494 27.382984 23.796834 27.382819 22.304688 25.890625 L 13.414062 17 z M 38 18.412109 L 38 31.587891 L 31.402344 25 L 38 18.412109 z M 12 18.414062 L 18.585938 25 L 12 31.585938 L 12 18.414062 z M 29.988281 26.412109 L 36.585938 33 L 13.414062 33 L 20 26.414062 L 20.890625 27.304688 C 23.146478 29.56054 26.832638 29.562194 29.089844 27.308594 L 29.988281 26.412109 z" />
              </svg>
            </a>
          </li>
          <li className=" hover:-translate-y-1 transition-all">
            <a href="https://github.com/Sirlahm/">
              <svg
                fill="#6fdcbfe6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                {" "}
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
              </svg>
            </a>
          </li>
          <li className=" hover:-translate-y-1 transition-all">
            <a href="https://twitter.com/Reedone_Sirlahm">
              <svg
                fill="#6fdcbfe6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                {" "}
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
              </svg>
            </a>
          </li>
          <li className=" hover:-translate-y-1 transition-all">
            <a href="https://www.linkedin.com/in/ridwan-abdulsalam-81bba01b1/">
              <svg
                fill="#6fdcbfe6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                {" "}
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z" />
              </svg>
            </a>
          </li>
        </ul>
      </motion.div>
      <div className="  bgg h-screen md:h-[700px] ">
        <div className="flex h-full md:space-x-6 smd:space-x-10 max-w-6xl mx-auto px-4 md:px-6 slg:px-0 ">
          <div className="h-full w-full absolute top-0 left-0 flex-1 md:relative flex flex-col items-center">
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: "0", x: "0" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="hide md:block absolute right-auto  md:left-auto   xl:right-[200px] md:right-[90px]"
            >
              <Lamp className="h-44 " />
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1, duration: 2 }}
              className="hide md:block absolute w-full md:w-auto left-[50%]  top-[50%] md:left-auto md:top-auto right-0 bottom-auto md:right-0 xl:right-[50px] md:bottom-[130px] xl:bottom-[100px] "
            >
              <Laptop className=" w-full h-[200px] smd:h-[230px] slg:h-[280px]  dlg:h-auto " />
            </motion.div>
          </div>
          <div className="flex-1 self-center md:pt-32 text-center md:text-left z-[2]">
            <p className="text-3xl  font-jenthill font-semibold  md:text-[#333333]">
              {" "}
              👋 Hi my name is
            </p>
            <p className="mt-2 text-[1.79rem] slg:text-[2.5rem] font-black font-mosk  md:text-[#333333]">
              RIDWAN ABDULSALAM.
            </p>
            <p className="mt-2 text-xl slg:text-2xl textStroke font-black font-mosk  md:text-[#333333]">
              FULLSTACK DEVELOPER
            </p>

            <p className="mt-2 text-base slg:text-xl font-mosk  md:text-[#333333]">
              I'm a Software Developer experienced in frontend and backend development. I
              design responsive user interfaces and optimize backend performance
              with secure servers, efficient databases, and APIs.
            </p>
            <Button mail="mailto:riliwanademola@yahoo.com">Get In Touch</Button>
            {/* <p className='mt-2 text-[3.2rem] font-black font-mosk text-[#333333]'>I build things for the web.</p> */}
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
