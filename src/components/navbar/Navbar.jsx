import React from "react";
import useMobileMenu from "../hooks/useMobileMenu"; // Import the hook
import "./navbar.css";
import "animate.css";

const Navbar = () => {
  // Call the useMobileMenu hook here
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
              <a href="#!">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
