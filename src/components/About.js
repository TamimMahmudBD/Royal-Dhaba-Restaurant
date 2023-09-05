import React, { useRef } from "react";
import AboutImg from "../assets/images/about-img";

const About = () => {
  const navbarRef = useRef();
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content" ref={navbarRef}>
            <h3>what makes our food special?</h3>
            <p>
              We have been supplying our customers with the finest food for the last 15 years, here are exceptional safes with commendable food quality. Our restaurant can accommodate up to 65 guests and potentially more. We can work with you on menus to organize snacks and drinks, first food in the mornong, lunches, and dinners.
            </p>
            <p>
              We source our ingredients with care and put our community at the center of everything we do. Contact us here to inquire! Welcome to our Royal Dhaba restaurant!
            </p>
            <a href="#contact" className="btn">
              Welcome!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
