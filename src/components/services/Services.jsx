import React from "react";
import "./services.css";
import { PiHandshakeThin } from "react-icons/pi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiRoundTable } from "react-icons/gi";

const Services = () => {
  return (
    <section className="services__container">
      <div className="services__content">
        <h1>A place to grow your content</h1>
        <p>
          Coloby Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          mollitia, natus nostrum blanditiis amet voluptatem iusto nobis odio
          nemo expedita.
        </p>
      </div>
      <div className="service__box-container">
        <div className="service__box">
          <PiHandshakeThin className="service__box-icon" />
          <h2>Colobaration</h2>
          <small>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            soluta corrupti cum quae dicta repudiandae tempora?
          </small>
        </div>
        <div className="service__box">
          <FaHandHoldingDollar className="service__box-icon" />
          <h2>Cost Effective</h2>
          <small>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            soluta corrupti cum quae dicta repudiandae tempora?
          </small>
        </div>
        <div className="service__box">
          <GiRoundTable className="service__box-icon" />
          <h2>Face to Face</h2>
          <small>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            soluta corrupti cum quae dicta repudiandae tempora?
          </small>
        </div>
      </div>
    </section>
  );
};

export default Services;
