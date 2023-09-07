import React, { useRef } from "react";
// import bodyLogo from "../assets/images/logo.png";


const Navbar = () => {
  const navbarRef = useRef();


  return (
    <>
      <header className="header">
        <h1 href="/" className="logo-text">
          DHAKA CATERING
        </h1>
        <nav className="navbar" ref={navbarRef}>
          <a class="menu-name" href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          {/*<a href="#products">products</a>*/}
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          {/*<a href="#blogs">blogs</a>*/}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
