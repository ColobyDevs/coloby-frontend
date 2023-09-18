import React from "react";
import "./testimonials.css";
import Me from "../../assets/demzy.jpg";

const Testimonials = () => {
  return (
    <div>
      <section className="testimonials__container">
        <h3>Don't just take our word for it</h3>
        <div className="testimonials__box">
          <div className="testimonials">
            <h4>Coloby Lorem, ipsum.</h4>
            <p>
              Coloby Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo eum quisquam, beatae inventore modi sequi odio accusamus
              corrupti aspernatur nobis ipsa labore cumque officiis, magni amet
              hic totam non repellendus?
            </p>
            <hr />
            <div className="testimonials__details">
              <img src={Me} alt="" />
              <small>
                Adeyemo Ademola <br />
                Founder - <a href="#">Viva</a>
              </small>
            </div>
          </div>
          <div className="testimonials">
            <h4>Coloby Lorem, ipsum.</h4>
            <p>
              Coloby Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo eum quisquam, beatae inventore modi sequi odio accusamus
              corrupti aspernatur nobis ipsa labore cumque officiis, magni amet
              hic totam non repellendus?
            </p>
            <hr />
            <div className="testimonials__details">
              <img src={Me} alt="" />
              <small>
                Adeyemo Ademola <br />
                Founder - <a href="#">Viva</a>
              </small>
            </div>
          </div>
          <div className="testimonials">
            <h4>Coloby Lorem, ipsum.</h4>
            <p>
              Coloby Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo eum quisquam, beatae inventore modi sequi odio accusamus
              corrupti aspernatur nobis ipsa labore cumque officiis, magni amet
              hic totam non repellendus?
            </p>
            <hr />
            <div className="testimonials__details">
              <img src={Me} alt="" />
              <small>
                Adeyemo Ademola <br />
                Founder - <a href="#">Viva</a>
              </small>
            </div>
          </div>
        </div>
        <p className="experience__text">
          Loved your experience with Coloby?
          <a href=""> Share your experience</a>
        </p>
      </section>
    </div>
  );
};

export default Testimonials;
