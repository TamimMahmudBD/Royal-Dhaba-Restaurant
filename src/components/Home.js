import React, { useRef } from "react";
import ReactWhatsapp from "react-whatsapp";

const Home = () => {
  const navbarRef = useRef();
  return (
    <>
      <section className="home" id="home">
        <div className="content" ref={navbarRef}>
          <h3>
            Fresh <span>food in the </span>morning
          </h3>
          <p>
            Welcome to DHAKA CATERING SERVICE! Don't delay in taking your best snacks. We look forward to welcoming you.
          </p>
          
          <ReactWhatsapp number="+8801712791500" className="btn fab fa-whatsapp" message="Hi, I need some information!" > WhatsApp</ReactWhatsapp>
          </div>
          

      </section>
    </>
  );
};

export default Home;
