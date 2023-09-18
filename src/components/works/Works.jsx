import React from "react";
import "./works.css";
import WorkImage1 from "../../assets/works1.png";
import WorkImage2 from "../../assets/works2.png";
import WorkImage3 from "../../assets/works3.png";
import WorkImage4 from "../../assets/works4.png";
import Me from "../../assets/demzy.jpg";
// import { AiOutlineTrophy } from "react-icons/ai";
// import { BsXDiamondFill } from "react-icons/bs";

const Works = () => {
  return (
    <div>
      <section className="works__container">
        <div>
          <h3>How it all works</h3>
          <div className="works__container-content">
            <div>
              {" "}
              <img src={WorkImage1} alt="" />
              <h4>Create</h4>
              <p>
                Coloby ipsum dolor, sit amet consectetur adipisicing elit.
                Quasi, in? Pariatur alias eos nostrum recusandae illo.
              </p>
            </div>
            <div>
              {" "}
              <img src={WorkImage2} alt="" />
              <h4>Innovate</h4>
              <p>
                Coloby ipsum dolor, sit amet consectetur adipisicing elit.
                Quasi, in? Pariatur alias eos nostrum recusandae illo.
              </p>
            </div>
            <div>
              {" "}
              <img src={WorkImage3} alt="" />
              <h4>Collaborate</h4>
              <p>
                Coloby ipsum dolor, sit amet consectetur adipisicing elit.
                Quasi, in? Pariatur alias eos nostrum recusandae illo.
              </p>
            </div>
            <div>
              <img src={WorkImage4} alt="" />
              <h4>Clobby & Clobs</h4>{" "}
              <p>
                Coloby ipsum dolor, sit amet consectetur adipisicing elit.
                Quasi, in? Pariatur alias eos nostrum recusandae illo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="attracts__container">
        <div className="attracts__container-left"></div>
        <div className="attracts__container-right">
          <h3>Coloby Lorem, ipsum dolor.</h3>
          <p>
            Coloby Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            inventore fuga officia totam dolorum. Iste commodi eos, explicabo
            excepturi rem, beatae laudantium blanditiis nihil obcaecati laborum
            doloribus nobis!
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default Works;
