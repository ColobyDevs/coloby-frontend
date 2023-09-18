import React from "react";
import "./banner.css";
import Notebook from "../../assets/notebook.png";

const Banner = () => {
  return (
    <div>
      <section className="banner__container">
        <p>
          Coloby Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Maxime esse impedit adipisci saepe blanditiis ut quas, vel nulla,
          delectus, sint aut at?
        </p>
        <img src={Notebook} alt="" />
      </section>
    </div>
  );
};

export default Banner;
