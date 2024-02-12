import React from "react";

const Banner = () => {
  return (
    <>
      <section className="mt-[40px] w-[90%] m-auto bg-[#2A3675] h-[297px] pb-[200px] rounded-[10px] text-white pt-[50px]">
        <h4 className="text-center text-[2rem] font-[600] leading-[40px]">
          Start building something great today
        </h4>
        <p className="text-[0.875rem] font-[400] text-center leading-[40px] mt-[40px]">
          Join the 12Million+ professionals who use Coloby to collaborate with
          their teams, and build online communities.
        </p>
        <button className="bg-[#FAFBFF] w-[239px] text-[#0B1F89] h-[54px] flex justify-center items-center m-auto mt-[40px]">
          Register for free
        </button>
      </section>
    </>
  );
};

export default Banner;
