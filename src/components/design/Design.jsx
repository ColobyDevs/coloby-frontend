import React from "react";
import FacebookIcon from "../../assets/facebook-icon.png";
import GithubIcon from "../../assets/github-icon.png";
import GoogleIcon from "../../assets/google-icon.png";
import MicrosoftIcon from "../../assets/microsoft-icon.png";
import Banner from "../../assets/banner.svg";
import "./design.css";

const Design = () => {
  return (
    <section className="design__container">
      <div className="container">
        <div className="left__container animate__animated animate__fadeInLeft">
          <h1 className="main__text">
            Coloby ipsum dolor sit amet consectetur, <br />
            adipisicing elit. Deserunt, eius.
          </h1>
          <h4 className="sub__text">
            Coloby Lorem, ipsum dolor sit amet consectetur adipis elit.
            <br />
            Error ab rem dolorem!
          </h4>
          <div className="main__icon">
            <a href="">
              {" "}
              <img src={FacebookIcon} alt="" />
            </a>
            <a href="">
              {" "}
              <img src={GithubIcon} alt="" />
            </a>{" "}
            <a href="">
              {" "}
              <img src={GoogleIcon} alt="" />
            </a>
            <a href="">
              {" "}
              <img src={MicrosoftIcon} alt="" />
            </a>
          </div>
          <div className="start__project animate__animated animate__bounce">
            <a href="#">Start a Project</a>
          </div>
        </div>
        <div className="right__container animate__animated animate__fadeInRight">
          <img src={Banner} alt="" width={600} />
        </div>
      </div>
    </section>
  );
};

export default Design;
