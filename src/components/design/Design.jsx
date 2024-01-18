import React from "react";
import DesignImage from "../../assets/designImage.png";

const Design = () => {
  return (
    <>
      <section className="flex gap-[3.5rem]  bg-gradient-to-b from-[#B6BEEAB2] to-[#D9D9D900] py-[9.375rem] px-[5.625rem]">
        <section>
          <h1 className="max-w-[28.125rem] text-[#030E46] text-[2.5rem] font-[37.5rem]">
            Build a team, manage task & Code
          </h1>
          <p className="max-w-[28.125rem] mt-4 text-[1rem] font-[31.25rem] text-[#3F4773]">
            With this open source system, you can build a strong team from
            various fields, manage tasks & codes, and increase productivity in
            your projects.
          </p>

          <button className="mt-4 flex gap-[.625rem] bg-[#0B1F89] py-[.625rem] px-[2.625rem] text-[#FBFCFE] text-[1rem] rounded-sm">
            Register
          </button>
        </section>

        <section>
          <div className="max-w-[750px] shadow-2xl">
            <img src={DesignImage} alt="" className="height[150%] " />
          </div>
        </section>
      </section>
    </>
  );
};

export default Design;
