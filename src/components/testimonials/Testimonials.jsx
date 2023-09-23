import React from "react";
import "./testimonials.css";
import Me from "../../assets/demzy.jpg";
import { useInView } from "react-intersection-observer"; // Import react-intersection-observer

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <section
        className={`testimonials__container animate__animated ${
          inView ? "animate__fadeInDown" : ""
        }`}
      >
        <h3>Don't just take our word for it</h3>
        <div className="testimonials__box">
          <div
            className={`testimonials ${inView ? "animate__fadeInLeft" : ""}`}
          >
            <h4>Coloby Lorem, ipsum.</h4>
            <p>
              Coloby Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo eum quisquam, beatae inventore modi sequi odio accusamus
              corrupti aspernatur nobis ipsa labore cumque officiis, magni amet
              hic totam non repellendus?
            </p>
            <hr />
            <div className="testimonials__details">
              <img
                src={Me}
                alt=""
                className={`animate__animated ${
                  inView ? "animate__fadeIn" : ""
                }`}
              />
              <small>
                Adeyemo Ademola <br />
                Founder - <a href="#">Viva</a>
              </small>
            </div>
          </div>
          <div
            className={`testimonials ${inView ? "animate__fadeInLeft" : ""}`}
          >
            <h4>Coloby Lorem, ipsum.</h4>
            <p>
              Coloby Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo eum quisquam, beatae inventore modi sequi odio accusamus
              corrupti aspernatur nobis ipsa labore cumque officiis, magni amet
              hic totam non repellendus?
            </p>
            <hr />
            <div className="testimonials__details">
              <img
                src={Me}
                alt=""
                className={`animate__animated ${
                  inView ? "animate__fadeIn" : ""
                }`}
              />
              <small>
                Adeyemo Ademola <br />
                Founder - <a href="#">Viva</a>
              </small>
            </div>
          </div>
          <div
            className={`testimonials ${inView ? "animate__fadeInLeft" : ""}`}
          >
            <h4>Coloby Lorem, ipsum.</h4>
            <p>
              Coloby Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo eum quisquam, beatae inventore modi sequi odio accusamus
              corrupti aspernatur nobis ipsa labore cumque officiis, magni amet
              hic totam non repellendus?
            </p>
            <hr />
            <div className="testimonials__details">
              <img
                src={Me}
                alt=""
                className={`animate__animated ${
                  inView ? "animate__fadeIn" : ""
                }`}
              />
              <small>
                Adeyemo Ademola <br />
                Founder - <a href="#">Viva</a>
              </small>
            </div>
          </div>
          {/* Repeat the same structure for other testimonials */}
        </div>
        <p className={`experience__text ${inView ? "animate__fadeInUp" : ""}`}>
          Loved your experience with Coloby?
          <a href=""> Share your experience</a>
        </p>
      </section>
    </div>
  );
};

export default Testimonials;
