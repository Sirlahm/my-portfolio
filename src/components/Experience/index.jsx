import React from "react";

import Tabs from "./Tabs";

const Exp = () => {
  return (
    <div id="experience" className=" bg-[#D3EBCD] py-24 md:py-32 lg:px-0 md:px-6 px-3">
      <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
        <div className="flex justify-between space-x-4 items-center">
          <p className=" text-xl sm:text-2xl md:text-3xl font-black md:tracking-[5px]  font-mosk text-[#333333]">
            02. Where I’ve Worked
          </p>
          <span className=" h-[3px] md:h-[5px] bg-[#333333] flex-1 "></span>
        </div>

        <Tabs />
      </div>
    </div>
  );
};

export default Exp;
