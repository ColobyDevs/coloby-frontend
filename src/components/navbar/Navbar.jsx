import React from "react";
import { Link } from "react-router-dom";

import useMobileMenu from "../hooks/useMobileMenu";
import Logo from "../../assets/logo.svg";
import { FaChevronDown } from "react-icons/fa";

import "./navbar.css";
import "animate.css";

const Navbar = () => {
  useMobileMenu();

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="">
            <div className="flex ">
              <img src={Logo} alt="" className="bg-purple-500" />
              <span className="mt-3">oloby</span>
            </div>
          </a>
        </div>
        <nav>
          <div className="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul className="nav-list">
            <li>
              <a href="#!" className="flex">
                Why Coloby <FaChevronDown className="mt-7 mx-2 little__icon" />
              </a>
            </li>
            <li>
              <a href="#!" className="flex">
                Product Guide
                <FaChevronDown className="mt-7 mx-2 little__icon" />
              </a>
            </li>
            <li>
              <a href="#!">How it Works</a>
            </li>

            <li>
              <a href="#!">Our Services</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
