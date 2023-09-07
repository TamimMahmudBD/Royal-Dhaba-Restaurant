import React from "react";
import qouteImg from "../assets/images/quote-img.png";
import reviewImage1 from "../assets/images/pic-1.jpg";
import reviewImage2 from "../assets/images/pic-2.jpg";
import reviewImage3 from "../assets/images/pic-3.jpg";

const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">

          <div className="box" >
            <img src={qouteImg} alt="" className="quote" />
            <p>
              The surroundings and environment are good but need some improvement. I just taste naan and grill, naan is great but the chicken grill was extra spicy.
            </p>
            <img src={reviewImage1} className="user" alt="" />
            <h3>Asif Tanzir</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
          <div className="box" >
            <img src={qouteImg} alt="" className="quote" />
            <p>
            Food quality at DHAKA CATERING SERVICE is excellent. I really enjoyed eating here. All this again when the time comes. Their hospitality impressed me
            </p>
            <img src={reviewImage2} className="user" alt="" />
            <h3>Ali Hussain</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
          <div className="box" >
            <img src={qouteImg} alt="" className="quote" />
            <p>
            Their pizza and chicken fries are amazing. I couldn't forget the faludar saad of DHAKA CATERING SERVICE. I am impressed with their service. Thank you for serving such food
            </p>
            <img src={reviewImage3} className="user" alt="" />
            <h3>Ripon Khan</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Review;
