import React from "react";
import "./banner.css";
import Notebook from "../../assets/notebook.png";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <section
        className={`banner__container animate__animated ${
          inView ? "animate__fadeIn" : ""
        }`}
      >
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
