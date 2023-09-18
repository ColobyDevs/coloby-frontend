import React from "react";
import FooterImage from "../../assets/works1.png";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer__container">
        <img src={FooterImage} alt="" />
        <div className="footer__container-content">
          <h3>
            Coloby Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Laboriosam culpa expedita debitis.
          </h3>
          <div className="footer__project">
            <a href="#">Start a Project</a>
          </div>
        </div>
      </footer>
      <section className="footer__bottom">
        <div className="footer__bottom-logo">Coloby</div>
        <div className="footer__bottom-links">
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
        <div className="footer__bottom-socials">
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
      <p className="copyright">
        &copy; <a href="#">Coloby</a>, All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
