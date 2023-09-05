
import React, { useRef } from "react";

const Footer = () => {
  const navbarRef = useRef();
  return (
    <>
      <section class="footer">
        <div class="share">
        
          <a href="http://www.facebook.com/royaldhabakashiani/" class="fab fa-facebook-f" target="_blank" rel="noreferrer"><span></span></a>
          <a href="http://www.facebook.com/royaldhabakashiani/" class="fab fa-twitter" target="_blank" rel="noreferrer"><span></span></a>
          <a href="http://www.facebook.com/royaldhabakashiani/" class="fab fa-instagram" target="_blank" rel="noreferrer"><span></span></a>
          <a href="http://www.facebook.com/royaldhabakashiani/" class="fab fa-linkedin" target="_blank" rel="noreferrer"><span></span></a>
          <a href="http://www.facebook.com/royaldhabakashiani/" class="fab fa-pinterest" target="_blank" rel="noreferrer"><span></span></a>
        </div>
        <div class="links" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </div>
        <div class="credit">
        © Copyright by <span>Royel Dhaba Resturent & Party Center</span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
