import React from "react";
import productImage1 from "../assets/images/product-1.png";
import productImage2 from "../assets/images/product-2.png";
import productImage3 from "../assets/images/product-3.png";


const Products = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span> BEST products</span>
        </h1>

        <div className="box-container">
            <div className="box" >
              <div className="icons">
                <a href="/" className="fas fa-check-circle"><span></span></a>
                <a href="/" className="fas fa-heart"><span></span></a>
                <a href="/" className="fas fa-eye"><span></span></a>
              </div>
              <div className="image">
                <img src={productImage1} alt="" />
              </div>
              <div className="content">
                <h3>fresh coffee</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                  199 TK. <span>249 Tk.</span>
                </div>
              </div>
            </div>
            <div className="box" >
              <div className="icons">
                <a href="/" className="fas fa-check-circle"><span></span></a>
                <a href="/" className="fas fa-heart"><span></span></a>
                <a href="/" className="fas fa-eye"><span></span></a>
              </div>
              <div className="image">
                <img src={productImage2} alt="" />
              </div>
              <div className="content">
                <h3>fresh coffee</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                  299 TK. <span>349 Tk.</span>
                </div>
              </div>
            </div>
            <div className="box" >
              <div className="icons">
                <a href="/" className="fas fa-check-circle"><span></span></a>
                <a href="/" className="fas fa-heart"><span></span></a>
                <a href="/" className="fas fa-eye"><span></span></a>
              </div>
              <div className="image">
                <img src={productImage3} alt="" />
              </div>
              <div className="content">
                <h3>fresh coffee</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                  150 TK. <span>189 Tk.</span>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Products;
