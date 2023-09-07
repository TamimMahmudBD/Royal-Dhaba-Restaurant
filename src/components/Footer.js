import { useEffect } from 'react';
// import React, { useRef } from "react";

const Footer = () => {
  // const navbarRef = useRef();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <section class="footer">
        <div class="share">

          <a href="/" class="fab fa-facebook-f" target="_blank" rel="noreferrer"><span></span></a>
          <a href="/" class="fab fa-twitter" target="_blank" rel="noreferrer"><span></span></a>
          <a href="/" class="fab fa-instagram" target="_blank" rel="noreferrer"><span></span></a>
          
        </div>
        {/*<div class="links" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </div>*/}
        <div class="credit">
          © Copyright by <span>Royel Dhaba Resturent & Party Center</span> | all rights reserved.
        </div>
        <div>
          <button className='fas fa-angle-up w-6 h-6]'
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
            style={{
              position: 'fixed',
              padding: '1rem 1.5rem',
              fontSize: '20px',
              bottom: '40px',
              right: '40px',
              backgroundColor: '#ffc107',
              color: '#13131a',
              textAlign: 'center',
            }}
          >
            
          </button>
        </div>

      </section>
    </>
  );
};

export default Footer;
