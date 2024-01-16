import React from "react";
import { Link } from "react-router-dom";

import useMobileMenu from "../hooks/useMobileMenu";
import "./navbar.css";
import "animate.css";

const Navbar = () => {
  useMobileMenu();

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="">
            Coloby
            {/* <img src="images/school-logo.png" alt="" /> */}
          </a>
        </div>
        <nav>
          <div className="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul className="nav-list">
            {/* HOME
            <li>
              <a href="#!">HOME</a>
            </li>
            */}
            <li>
              <a href="#!">How it works</a>
            </li>
            <li>
              <a href="#!">Costing</a>
            </li>
            <li>
              <a href="#!">Our Services</a>
            </li>

            <li>
              <a href="#!">Testimonials</a>
            </li>
            <li>
              {/* <a href="/">Login</a> */}
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
