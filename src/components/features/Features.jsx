import React from "react";
import { IoIosStar } from "react-icons/io";
import { TbBallFootball } from "react-icons/tb";
import { HiArrowLongRight } from "react-icons/hi2";

// Need to fix feature container box bug

const Features = () => {
  return (
    <>
      <section className="h-[100vh] mt-16">
        <IoIosStar className="m-auto text-[2rem] text-[#0B1F89] rounded-full bg border-2 border-solid border-[#0B1F89] p-[2px] mb-6" />
        <h3 className="text-center text-[2.25rem] text-[#030E46] font-[700]">
          FEATURES
        </h3>

        {/* Features inside box */}

        <section className="w-[85%] flex m-auto items-center justify-center flex-wrap h-[100vh]">
          <div className="w-[300px] h-[250px] border-solid border-[1px] border-[#7E7B7B] flex flex-col justify-between">
            <TbBallFootball className="text-[#00000099] text-[4rem] mt-[10px] p-[15px]" />
            <div className="flex justify-between p-[15px] text-[#00000099] items-center">
              <p className="text-[1rem] font-[400]">Ai Support</p>
              <HiArrowLongRight className="text-[2rem]" />
            </div>
          </div>
          <div className="w-[300px] h-[250px] border-solid border-[1px] border-[#7E7B7B] flex flex-col justify-between">
            <TbBallFootball className="text-[#00000099] text-[4rem] mt-[10px] p-[15px]" />
            <div className="flex justify-between p-[15px] text-[#00000099] items-center">
              <p className="text-[1rem] font-[400]">Ai Support</p>
              <HiArrowLongRight className="text-[2rem]" />
            </div>
          </div>
          <div className="w-[300px] h-[250px] border-solid border-[1px] border-[#7E7B7B] flex flex-col justify-between">
            <TbBallFootball className="text-[#00000099] text-[4rem] mt-[10px] p-[15px]" />
            <div className="flex justify-between p-[15px] text-[#00000099] items-center">
              <p className="text-[1rem] font-[400]">Ai Support</p>
              <HiArrowLongRight className="text-[2rem]" />
            </div>
          </div>
          <div className="w-[300px] h-[250px] border-solid border-[1px] border-[#7E7B7B] flex flex-col justify-between">
            <TbBallFootball className="text-[#00000099] text-[4rem] mt-[10px] p-[15px]" />
            <div className="flex justify-between p-[15px] text-[#00000099] items-center">
              <p className="text-[1rem] font-[400]">Ai Support</p>
              <HiArrowLongRight className="text-[2rem]" />
            </div>
          </div>
          <div className="w-[300px] h-[250px] border-solid border-[1px] border-[#7E7B7B] flex flex-col justify-between">
            <TbBallFootball className="text-[#00000099] text-[4rem] mt-[10px] p-[15px]" />
            <div className="flex justify-between p-[15px] text-[#00000099] items-center">
              <p className="text-[1rem] font-[400]">Ai Support</p>
              <HiArrowLongRight className="text-[2rem]" />
            </div>
          </div>
          <div className="w-[300px] h-[250px] border-solid border-[1px] border-[#7E7B7B] flex flex-col justify-between">
            <TbBallFootball className="text-[#00000099] text-[4rem] mt-[10px] p-[15px]" />
            <div className="flex justify-between p-[15px] text-[#00000099] items-center">
              <p className="text-[1rem] font-[400]">Ai Support</p>
              <HiArrowLongRight className="text-[2rem]" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Features;
