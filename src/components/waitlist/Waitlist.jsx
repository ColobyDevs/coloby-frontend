import React from "react";
import "./waitlist.css";
import Logo from "../../assets/logo.svg";
import Cover from "../../assets/cover.png";
import FooterImage from "../../assets/logo2.svg";
import { FaChevronDown } from "react-icons/fa";

const Waitlist = () => {
  return (
    <>
      <section className="waitlist__container bg-[#fbfcfe]">
        <div className="waitlist_left-container">
          <div className="flex ">
            <img src={Logo} alt="Coloby Logo" />
            <span className="mt-11 text-2xl text-[#052CFD]">oloby</span>
          </div>
          <h1>
            Build a team, manage <br /> task & Code
          </h1>
          <h4>
            With this open source system, you can build a strong team from
            various fields, manage tasks & codes, and increase productivity in
            your projects.
          </h4>
          <img src={Cover} alt="" className="waitlist_cover" />
          <div className="flex mt-18">
            <p className="mt-2 mr-2">Build with </p>
            <img src={FooterImage} alt="footer logo" />
            <span className="mt-2 text-[#052CFD]">oloby</span>
          </div>
        </div>
        <div className="waitlist_right-container ">
          <div className="waitlist_right-container-box ">
            <a href="" className="flex text-[#052CFD]">
              Why Coloby
              <FaChevronDown className="mt-1.5 ml-0.5 text-[#052CFD]" />
            </a>
            <a href="" className="flex text-[#052CFD]">
              Product Guide
              <FaChevronDown className="mt-1.5 ml-0.5 text-[#052CFD]" />
            </a>
          </div>
          <h2>What are you building?</h2>
          <form
            action=""
            className="w-[90%] m-auto ml-10 h-[10vh] flex flex-col "
          >
            <div className="h-4 flex gap-7">
              <div>
                <p>
                  <label className="text-[#0C164C]">Company Name</label>
                </p>
                <input
                  type="text"
                  placeholder="Coloby"
                  required
                  className="border-2 border-solid border-[#00000040] py-2 rounded-xl px-2 mt-1"
                />
              </div>
              <div>
                <p>
                  <label className="text-[#0C164C]">Number of Team</label>
                </p>
                <input
                  type="text"
                  placeholder="Less than 20"
                  required
                  className="border-2 border-solid border-[#00000040] py-2 rounded-xl px-2 mt-1"
                />
              </div>
            </div>
            <div className="mt-20">
              <p>
                <label>Company E-mail Address</label>
              </p>
              <input
                type="email"
                placeholder="coloby@gmail.com"
                required
                className="w-[450px] border-2 border-solid border-[#00000040] py-2 rounded-xl px-2 mt-1"
              />
            </div>
            <div className="mt-6">
              <label className="text-[#030E46]">
                What best describe what your team does
              </label>

              <div className="flex gap-3 mt-4">
                <p>
                  <input type="radio" name="teamRole" className="mr-2" />
                  Developer
                </p>
                <p>
                  <input type="radio" name="teamRole" className="mr-2" />
                  Non-Developer
                </p>
                <p>
                  <input type="radio" name="teamRole" className="mr-2" />
                  Student
                </p>
              </div>
            </div>
            <div>
              <button className=" py-3 bg-[#0B1F89] text-[#FAFBFF] text-xl mt-6 flex mx-auto justify-center items-center min-w-[40%]">
                Join Waitlist
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Waitlist;
