import React from "react";
import Logo from "../../assets/logo.svg";
import { HiArrowLongRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <>
      <section className="bg-[#E7F1FD80]">
        <section className="mt-[40px] w-[90%] m-auto pb-[80px]">
          <div className="flex pt-[40px] pb-6">
            <img src={Logo} width="48px" alt="Coloby Logo" />
            <span className="mt-[1rem] text-[1rem] text-[#052CFD] font-[600]">
              oloby
            </span>
          </div>

          {/* MAIN FOOTER CONTENT */}

          <section className="footer__conatainer">
            <div>
              <h5 className="text-[1.25rem] font-[500] leading-[40px] text-[#000000] mb-[10px]">
                Company
              </h5>
              <ul className="leading-[40px]">
                <li>
                  <a href="#" className="text-[#2F142E99]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F142E99]">
                    Students
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F142E99]">
                    Instructors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F142E99]">
                    User Experiences
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F142E99]">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F142E99]">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-[1.25rem] font-[500] leading-[40px] text-[#000000] mb-[10px]">
                Courses
              </h5>
              <ul className="leading-[40px]">
                <li>
                  <a href="#" className="text-[#2F142E99]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F142E99]">
                    Students
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F142E99]">
                    Instructors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F142E99]">
                    User Experiences
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-[1.25rem] font-[500] leading-[40px] text-[#000000] mb-[10px]">
                Features
              </h5>
              <ul className="leading-[40px]">
                <li>
                  <a href="#" className="text-[#2F142E99]">
                    Ai Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#2F142E99]">
                    Flexible Schedule
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-[#D781D326] w-[401px] h-[296px] pt-[20px] pr-[40px] pb-[20px] pl-[40px] rounded-[5px]">
              <h6 className="text-[#4D254B] text-[20px] font-[600] pb-[20px] leading-[40px]">
                Subscribe
              </h6>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="h-[60px] w-[256px] p-[10px]"
                />
                <button className="h-[60px] w-[65px] bg-[#922E8D] text-center text-white flex items-center justify-center text-[2rem]">
                  <HiArrowLongRight />
                </button>
              </div>
              <p className="text-[0.75rem] mt-[20px] leading-[30px]">
                Enter your email address to enable us keep you updated on our
                latest courses and other neccessary information.
              </p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Footer;
