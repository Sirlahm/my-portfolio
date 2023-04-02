import React from "react";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      href={props.mail}
      className={` ${props.className} mt-7 inline-block `}
      onClick={props.onClick}
    >
      <p
        className={` mt-2 border-2 border-[#333333] text-xl font-mosk  md:text-[#333333] py-3  px-12 cursor-pointer md:hover:bg-[#333333] rounded md:hover:text-white transition-all duration-500 `}
      >
        {props.children} 
      </p>
    </motion.a>
  );
};

export default Button;

