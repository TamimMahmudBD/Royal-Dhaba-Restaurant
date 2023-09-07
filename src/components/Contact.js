import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
          <iframe title="Dhaka Catering Service Map on Google"
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.952383614067!2d90.41525377420828!3d23.78470988746047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c798c582b7fd%3A0xc4b304d16eca29c3!2s1%20Rd%20126%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1694121973604!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form action="" className="contact-sec">
            <h3>get in touch</h3>
            <div class="contact-text inputBox">
              <span class="fas fa-chess-king"></span><span></span>
              <h2 className="text-sm text-white text-left"> DHAKA CATERING SERVICE</h2>
            </div>
            <div class="contact-text inputBox">

              <span class="fas fa-mail-bulk"></span><span></span>
              <h2 className="text-sm text-white text-left"> Email: dhakacataringservice247@gmail.com</h2>
            </div>
            <div class="contact-text inputBox">
              <span class="fas fa-phone"></span><span></span>
              <h2 class="fas fa-phone" className="text-sm text-white"> Phone:
                +8801712791500, +88019111022</h2>
            </div>
            <div class="contact-text inputBox ">
              <span class="fas fa-map-marked"></span><span></span>
              <h2 className="text-sm text-white "> Address: HOUSE-39, ROAD-126, GULSHAN-01, DHAKA-1212</h2>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
