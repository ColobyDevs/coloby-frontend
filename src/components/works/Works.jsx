import React from "react";
import "./works.css";
import WorkImage1 from "../../assets/works1.png";
import WorkImage2 from "../../assets/works2.png";
import WorkImage3 from "../../assets/works3.png";
import WorkImage4 from "../../assets/works4.png";
// import Me from "../../assets/demzy.jpg";
import { useInView } from "react-intersection-observer";

const Works = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <section
        className={`works__container animate__animated ${
          inView ? "animate__fadeInLeft" : ""
        }`}
      >
        <div>
          <h3>How it all works</h3>
          <div className="works__container-content">
            <div>
              <img src={WorkImage1} alt="" />
              <h4>Create</h4>
              <p>
                Coloby ipsum dolor, sit amet consectetur adipisicing elit.
                Quasi, in? Pariatur alias eos nostrum recusandae illo.
              </p>
            </div>
            <div>
              <img src={WorkImage2} alt="" />
              <h4>Innovate</h4>
              <p>
                Coloby ipsum dolor, sit amet consectetur adipisicing elit.
                Quasi, in? Pariatur alias eos nostrum recusandae illo.
              </p>
            </div>
            <div>
              <img src={WorkImage3} alt="" />
              <h4>Collaborate</h4>
              <p>
                Coloby ipsum dolor, sit amet consectetur adipisicing elit.
                Quasi, in? Pariatur alias eos nostrum recusandae illo.
              </p>
            </div>
            <div>
              <img src={WorkImage4} alt="" />
              <h4>Clobby & Clobs</h4>
              <p>
                Coloby ipsum dolor, sit amet consectetur adipisicing elit.
                Quasi, in? Pariatur alias eos nostrum recusandae illo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
