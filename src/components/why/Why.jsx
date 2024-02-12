import React from "react";
import WhyUse from "../../assets/why1.png";

const Why = () => {
  return (
    <>
      <section
        className=""
        style={{ background: "linear-gradient(to top, #9A27A4, #2844DC)" }}
      >
        <h3 className="text-center text-white text-[3rem] font-[700] leading-[58.09px] pt-[100px]">
          Why Coloby?
        </h3>

        {/* CARDS SECTION */}
        <section>
          <div className="flex gap-[74px] m-auto justify-center mt-[80px]">
            <img src={WhyUse} alt="why use Coloby image1" className="w-[40%]" />
            <div className="max-w-[570px] bg-[#03030380] p-[10px] text-white rounded-[5px]">
              <h4 className="text-[2rem] text-center font-[600]">
                Task Management
              </h4>
              <p className="text-[1rem] font-[400]">
                Lorem ipsum dolor sit amet consectetur. Accumsan tellus id nunc
                non enim et. Potenti ut volutpat in ipsum. Mi sit pellentesque
                enim euismod interdum vitae praesent 4 tempor ut.Lorem ipsum
                dolor sit amet consectetur. Accumsan tellus id nunc non enim et.
                Potenti ut volutpat in ipsum. Mi sit pellentesque enim euismod
                interdum vitae praesent 4 tempor ut.
              </p>
            </div>
          </div>

          <div className="flex gap-[74px] m-auto justify-center mt-[80px]">
            <div className="max-w-[570px] bg-[#03030380] p-[10px] text-white rounded-[5px]">
              <h4 className="text-[2rem] text-center font-[600]">
                Task Management
              </h4>
              <p className="text-[1rem] font-[400]">
                Lorem ipsum dolor sit amet consectetur. Accumsan tellus id nunc
                non enim et. Potenti ut volutpat in ipsum. Mi sit pellentesque
                enim euismod interdum vitae praesent 4 tempor ut.Lorem ipsum
                dolor sit amet consectetur. Accumsan tellus id nunc non enim et.
                Potenti ut volutpat in ipsum. Mi sit pellentesque enim euismod
                interdum vitae praesent 4 tempor ut.
              </p>
            </div>
            <img src={WhyUse} alt="why use Coloby image1" className="w-[40%]" />
          </div>

          <div className="flex gap-[74px] m-auto justify-center mt-[80px]">
            <img src={WhyUse} alt="why use Coloby image1" className="w-[40%]" />
            <div className="max-w-[570px] bg-[#03030380] p-[10px] text-white rounded-[5px]">
              <h4 className="text-[2rem] text-center font-[600]">
                Task Management
              </h4>
              <p className="text-[1rem] font-[400]">
                Lorem ipsum dolor sit amet consectetur. Accumsan tellus id nunc
                non enim et. Potenti ut volutpat in ipsum. Mi sit pellentesque
                enim euismod interdum vitae praesent 4 tempor ut.Lorem ipsum
                dolor sit amet consectetur. Accumsan tellus id nunc non enim et.
                Potenti ut volutpat in ipsum. Mi sit pellentesque enim euismod
                interdum vitae praesent 4 tempor ut.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Why;
