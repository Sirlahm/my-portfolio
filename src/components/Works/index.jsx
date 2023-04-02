import React from "react";

import Spottr from "../../assets/images/spottr.jfif";
import weather from "../../assets/images/WEATHER.jfif";
import obig from "../../assets/images/shopabox.jfif";
import forkify from "../../assets/images/forkify.jfif";
import real from "../../assets/images/realEstate.jfif";
import Fade from "react-reveal/Fade";



const Link = () => {
  return(
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"  className="fill h-5 md:h-auto ">
<title>new-tab</title>
<path d="M6 2v24h24v-24h-24zM28 24h-20v-20h20v20zM4 28v-21l-2-2v25h25l-2-2h-21z " ></path>
<path d="M11 8l5 5-6 6 3 3 6-6 5 5v-13z"></path>
</svg>
  )
}

const Works = () => {
  return (
    <div id="work" className="bg-[#D3EBCD] ">
      <div className="max-w-5xl mx-auto py-24 md:py-32 lg:px-0 md:px-6 px-3 ">
        <div className="flex justify-between space-x-4 items-center mb-14">
          <p className="text-xl sm:text-2xl md:text-3xl font-black md:tracking-[5px]  font-mosk text-[#333333]">
            03. Project I've Featured{" "}
          </p>
          <span className="h-[3px] md:h-[5px] bg-[#333333] flex-1 "></span>
        </div>
        <div className="space-y-20">

        <Fade bottom duration={1000}>
   
        <div className="grid grid-cols-12 ">
            <div className=" col-[1_/-1] md:col-[1_/_span_7] row-[1_/-1] h-full">
              <a className=" h-full inline-block cursor-pointer" href="https://spottr.app/">
                <div className="bg-[#6fdcbfe6] hover:bg-transparent h-full">
                  <img
                    src={Spottr}
                    alt=""
                    className="mix-blend-multiply hover:mix-blend-normal filter rounded-md h-full"
                  />
                </div>
              </a>
            </div>

            <div className=" space-y-5 px-3  sm:px-10 md:px-0 py-4 sm:py-0 justify-center text-[#dcdcdc] md:text-[#333333] col-[1_/-1] md:col-[7_/_span_11] row-[1_/-1]  z-[5] md:space-y-2 flex flex-col ">
              <p className=" text-xl md:text-2xl font-bold md:text-right">Spottr</p>
              <div className="md:bg-[#6fdcbfe6] md:p-7 rounded-md">
                <p className="text-base lg:text-lg">
                  The SpottR app projects to connect millions of households and
                  businesses in Africa with seamless economic opportunity
                  spotlighting and matching. I redesigned some part of the User Interface.
                </p>
              </div>
              <ul className="flex md:justify-end space-x-3 text-[.75rem] lg:text-base">
                <li>Reactjs</li>
                <li>React-Globe-Gl</li>
                <li>React-simple-Maps</li>
                <li>ChakraUI</li>
              </ul>
              <a className=" cursor-pointer md:self-end" href="https://spottr.app/">
               <Link/>
              </a>
            </div>
          </div>

  </Fade>

  <Fade bottom duration={1500}>

          
          <div className="grid grid-cols-12 ">
            <div className="col-[1_/-1] md:col-[6_/_span_11] row-[1_/-1] h-full">
              <a className=" cursor-pointer h-full inline-block" href="https://weather-live-react.herokuapp.com/ ">
                <div className="bg-[#6fdcbfe6] hover:bg-transparent h-full">
                  <img
                    src={weather}
                    alt=""
                    className="h-full mix-blend-multiply hover:mix-blend-normal filter rounded-md"
                  />
                </div>
              </a>
            </div>

            <div className=" space-y-5 px-3  sm:px-10 md:px-0 py-4 sm:py-0 justify-center text-[#dcdcdc] md:text-[#333333] col-[1_/-1] md:col-[1_/_span_6]  row-[1_/-1] text-left z-[5] md:space-y-2 flex flex-col ">
              <p className="text-2xl font-bold ">Weather App</p>
              <div className="md:bg-[#6fdcbfe6] md:p-7 rounded-md">
                <p className=" text-base lg:text-lg">
                  A web application that forecasts weather and give prediction
                  on whether for the next few days.
                </p>
              </div>
              <ul className="flex flex-wrap justify-start space-x-3 text-[.75rem] lg:text-base">
                <li>Reactjs</li>
                <li>Redux</li>
                <li>Redux-Thunk</li>
                <li>Sass</li>
                <li>Axios</li>
                <li>Openweathermap-Api</li>
              </ul>
              <a className=" cursor-pointer self-start" href="https://weather-live-react.herokuapp.com/">
              <Link/>

              </a>
              <div>

              </div>
            </div>
          </div>
      </Fade>

      <Fade bottom duration={2000}>

          <div className="grid grid-cols-12 ">
            <div className="col-[1_/-1] md:col-[1_/_span_7] row-[1_/-1] rounded-md h-full">
              <a className=" cursor-pointer rounded-md h-full inline-block" href="https://forkify-application.herokuapp.com//">
                <div className="bg-[#6fdcbfe6] hover:bg-transparent f rounded-md h-full">
                  <img
                      src={forkify}
                    alt=""
                    className="mix-blend-multiply hover:mix-blend-normal filter rounded-md h-full"
                  />
                </div>
              </a>
            </div>

            <div className=" space-y-5 px-3  sm:px-10 md:px-0 py-4 sm:py-0 justify-center text-[#dcdcdc] md:text-[#333333] col-[1_/-1] md:col-[7_/_span_11] row-[1_/-1]  z-[5] md:space-y-3 flex flex-col ">
            <p className="text-2xl font-bold md:text-right">Forkify App</p>
              <div className="md:bg-[#6fdcbfe6] md:p-7 rounded-md">
                <p className="text-base lg:text-lg">
                A web application that gives in details on how to prepare a
                  recipe.
                </p>
              </div>
              <ul className="flex flex-wrap md:justify-end space-x-3 text-[.75rem] lg:text-base">
              <li>Reactjs</li>
                <li>Redux</li>
                <li>Redux-Thunk</li>
                <li>Sass</li>
                <li>Axios</li>
                <li>Mongodb</li>
                <li>Express</li>
                <li>Nodejs</li>

              </ul>
              <a className=" cursor-pointer md:self-end" href="https://forkify-application.herokuapp.com/">
              <Link/>
              </a>
            </div>
          </div>


          </Fade>

          <Fade bottom duration={2500}>


          <div className="grid grid-cols-12 ">
            <div className="col-[1_/-1] md:col-[6_/_span_11] row-[1_/-1] h-full">
              <a className=" cursor-pointer h-full inline-block" href="https://shopabox-www.vercel.app/ ">
                <div className="bg-[#6fdcbfe6] hover:bg-transparent h-full">
                  <img
                    src={obig}
                    alt=""
                    className="h-full mix-blend-multiply hover:mix-blend-normal filter rounded-md"
                  />
                </div>
              </a>
            </div>

            <div className="space-y-5 px-3  sm:px-10 md:px-0 py-4 sm:py-0 justify-center text-[#dcdcdc] md:text-[#333333] col-[1_/-1] md:col-[1_/_span_6]  row-[1_/-1] text-left z-[5] md:space-y-3 flex flex-col ">
              <p className="text-2xl font-bold ">Shopabox</p>
              <div className="md:bg-[#6fdcbfe6] md:p-7 rounded-md">
                <p className="text-base lg:text-lg">
                  A E-commerce web application with a fast checkout.
                </p>
              </div>
              <ul className="flex flex-wrap justify-start space-x-3 text-[.75rem] lg:text-base">
                <li>Nexjsjs</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>Framer Motion</li>
                <li>Apollo Graphql</li>
                <li>Nodejs</li>
                <li>Notion</li>

              </ul>
              <a className=" cursor-pointer self-start" href="https://shopabox-www.vercel.app/">
              <Link/>
              </a>
            </div>
          </div>
          </Fade>

          <Fade bottom duration={3000}>

          <div className="grid grid-cols-12 ">
            <div className="col-[1_/-1] md:col-[1_/_span_7] row-[1_/-1] h-full">
              <a className=" cursor-pointer h-full inline-block" href="https://real-estate-zeta-dun.vercel.app">
                <div className="bg-[#6fdcbfe6] hover:bg-transparent h-full">
                  <img
                    src={real}
                    alt=""
                    className="mix-blend-multiply hover:mix-blend-normal filter rounded-md h-full"
                  />
                </div>
              </a>
            </div>

            <div className="space-y-5 px-3  sm:px-10 md:px-0 py-4 sm:py-0 justify-center text-[#dcdcdc] md:text-[#333333] col-[1_/-1] md:col-[7_/_span_11] row-[1_/-1]  z-[5] md:space-y-3 flex flex-col">
              <p className="text-2xl font-bold md:text-right">Realtor</p>
              <div className="md:bg-[#6fdcbfe6] md:p-7 rounded-md">
                <p className="text-base lg:text-lg">
                  A Real Estate web application. 
                </p>
              </div>
              <ul className="flex md:justify-end space-x-3 text-[.75rem] lg:text-base">
                <li>Nextjs</li>
                <li>Chakra UI</li>
                <li>Axios</li>
                <li>RapidApi</li>
              </ul>
              <a className=" cursor-pointer md:self-end" href="https://real-estate-zeta-dun.vercel.app">
              <Link/>
              </a>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Works;
