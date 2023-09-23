import React from "react";
import FooterImage from "../../assets/works1.png";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { useInView } from "react-intersection-observer"; // Import react-intersection-observer
import "./footer.css";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={`footer ${inView ? "animate__fadeInDown" : ""}`} ref={ref}>
      <footer
        className={`footer__container animate__animated ${
          inView ? "animate__bounceInDown" : ""
        }`}
      >
        <img src={FooterImage} alt="" />
        <div
          className={`footer__container-content ${
            inView ? "animate__fadeIn" : ""
          }`}
        >
          <h3>
            Coloby Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Laboriosam culpa expedita debitis.
          </h3>
          <div
            className={`footer__project ${inView ? "animate__fadeInDown" : ""}`}
          >
            <a href="#">Start a Project</a>
          </div>
        </div>
      </footer>
      <section className={`footer__bottom ${inView ? "animate__fadeIn" : ""}`}>
        <div className="footer__bottom-logo">Coloby</div>
        <div
          className={`footer__bottom-links ${inView ? "animate__fadeIn" : ""}`}
        >
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">API Calls</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div
          className={`footer__bottom-socials ${
            inView ? "animate__fadeIn" : ""
          }`}
        >
          <ul>
            <li>
              <a href="#">
                <BiLogoFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <p className={`copyright ${inView ? "animate__fadeIn" : ""}`}>
        &copy; <a href="#">Coloby</a>, All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
