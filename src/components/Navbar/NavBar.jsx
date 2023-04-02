import React, { useState } from "react";
import ReactDOM from "react-dom";
import { motion} from "framer-motion";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={ props.onClick}
      className="w-full h-screen fixed top-0 left-0 filll bg-[#000000bf] z-[10]"
    ></div>,
    document.getElementById("modal-hook")
  );
};

const NavBar = () => {
  const [click, handleClick] = useState(false);

  return (
    <>
      {click && <Modal onClick={() => handleClick(!click)} />}
      <div className="  max-w-6xl mx-auto flex justify-between py-7 px-4 md:px-8  xl:px-0 fixed left-0 right-0 z-[11]">
        <div>
          <span className=" text-xl mt-1 md:mt-0 md:text-2xl slg:text-3xl text-primary font-jenthill font-medium ">
            ridwanAbdulSalam
          </span>
        </div>
        <button
          onClick={() => handleClick(!click)}
          className={`${click ? "btn x-btn mt-3" : "btn "}`}
        ></button>

        <ul className=" list-none font-mosk hidden md:flex items-center space-x-4 ">
          <li className="before:content-['01.'] before:mr-2 before:text-[#f5f0e1] before:text-base slg:text-base text-sm  font-bold text-[#333333] font-mosk cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="before:content-['02.'] before:mr-2 before:text-[#f5f0e1] before:text-base slg:text-base text-sm  font-bold text-[#333333] font-mosk cursor-pointer">
            {" "}
            <a href="#experience">Experience</a>
          </li>

          <li className="before:content-['03.'] before:mr-2 before:text-[#f5f0e1] before:text-base slg:text-base text-sm  font-bold text-[#333333] font-mosk cursor-pointer">
          <a href="#work">Work</a>

          </li>

          <li className="before:content-['04.'] before:mr-2 before:text-[#f5f0e1] before:text-base text-sm  slg:text-base font-bold text-[#333333] font-mosk cursor-pointer">
          <a href="#contact">Contact</a>
          </li>

          <li className="border-2 border-[#333333] rounded p-1  slg:p-2 text-sm slg:text-base font-bold text-[#333333] font-mosk cursor-pointer  hover:bg-[#333333] hover:text-white transition-all duration-500 ">
            <a href="/file/Ridwan Abdulsalam.pdf" download>            Resume
</a>
          </li>
        </ul>
      </div>
    
        {click && (
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center md:hidden h-screen w-[70%] md:w-[60%] fixed right-0 py-20 px-16 bg-gray-100 z-[10]"
          >
            <ul className=" list-none font-mosk  space-y-8 ">
              <li onClick={() => handleClick(!click)} className="before:content-['01.'] before:w-[15%] before:text-primary before:text-base  text-base tracking-widest flex flex-col items-center   font-bold text-[#333333] font-mosk cursor-pointer">
                <a href="#about">About</a>
              </li>
              <li onClick={() => handleClick(!click)} className="before:content-['02.'] before:w-[15%] before:text-primary before:text-base  text-base tracking-widest flex flex-col items-center   font-bold text-[#333333] font-mosk cursor-pointer">
                {" "}
                <a href="#experience">Experience</a>
              </li>

              <li onClick={() => handleClick(!click)} className="before:content-['03.'] before:w-[15%] before:text-primary before:text-base  text-base tracking-widest flex flex-col items-center   font-bold text-[#333333] font-mosk cursor-pointer">
              <a href="#work">Work</a>
              </li>

              <li onClick={() => handleClick(!click)} className="before:content-['04.'] before:w-[15%] before:text-primary before:text-base  text-base tracking-widest flex flex-col items-center   font-bold text-[#333333] font-mosk cursor-pointer">
              <a href="#contact">Contact</a>
              </li>

              <li onClick={() => handleClick(!click)} className="border-2 border-[#333333] rounded  text-center p-2 text-base font-bold text-[#333333] font-mosk cursor-pointer  hover:bg-[#333333] hover:text-white transition-all duration-500 ">
              <a href="/file/Ridwan Abdulsalam.pdf" download>            Resume
</a>              </li>
            </ul>
          </motion.div> 
        )}
   
    </>
  );
};

export default NavBar;
