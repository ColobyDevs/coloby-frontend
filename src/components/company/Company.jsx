import React from "react";
import DesignIcon1 from "../../assets/designIcon1.png";
import DesignIcon2 from "../../assets/designIcon2.png";
import DesignIcon3 from "../../assets/designIcon3.png";
import DesignIcon4 from "../../assets/designIcon4.png";
import DesignIcon5 from "../../assets/designIcon5.png";

const Company = () => {
  return (
    <>
      <section>
        <h2 className="text-center text-[2.25rem] text-[#030E46] font-[600px] mb-[1rem]">
          FEATURED BY
        </h2>
        <p className=" m-auto flex items-center justify-center text-[#0B1F89] text-center text-[1.25rem] font-[400] text-wrap mb-[2rem]">
          Coloby open source services are used by over +587,000 individuals and
          <br />
          more than 2,000 organizations across the globe.
        </p>
        <div className="w-[80%] h-20 flex flex-row m-auto justify-evenly mb-10">
          <img src={DesignIcon1} alt="designIcon1" />
          <img src={DesignIcon2} alt="designIcon2" />
          <img src={DesignIcon3} alt="designIcon2" />
          <img src={DesignIcon4} alt="designIcon4" />
          <img src={DesignIcon5} alt="designIcon5" />
        </div>
      </section>
    </>
  );
};

export default Company;
