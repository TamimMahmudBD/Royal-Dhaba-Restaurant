import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
          <iframe title="Royel Dhaba Restaurent Map on Google" 
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14665.131822364201!2d89.7230368!3d23.2327883!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffc9aa54fb63dd%3A0x6a2240f24ee8f8eb!2sRoyal%20Dhaba%20Restaurant%20%26%20Party%20Center!5e0!3m2!1sen!2sbd!4v1693903163011!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form action="">
            <h3>get in touch</h3>
            <div class="contact-text inputBox">
            <span class="fas fa-chess-king"></span><span></span>
              <h2  className="text-sm text-white"> Royel Dhaba Resturent & Party Center</h2>
            </div>
            <div class="contact-text inputBox">
            
            <span class="fas fa-mail-bulk"></span><span></span>
              <h2  className="text-sm text-white "> Email: parosh1234@gmail.com</h2>
            </div>
            <div class="contact-text inputBox">
            <span class="fas fa-phone"></span><span></span>
              <h2 class="fas fa-phone" className="text-sm text-white"> Phone:
              +880 01909037072</h2>
            </div>
            <div class="contact-text inputBox ">
            <span class="fas fa-map-marked"></span><span></span>
              <h2  className="text-sm text-white "> Address: Kashiani Bus stand, Kashiani, Gopalgonj.</h2>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
