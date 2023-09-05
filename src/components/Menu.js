import React from "react";
// import { menu } from "../Data";
import menuImage1 from "../assets/images/menu-1.png";
import menuImage2 from "../assets/images/menu-2.png";
import menuImage3 from "../assets/images/menu-3.png";
import menuImage4 from "../assets/images/menu-4.png";
import menuImage5 from "../assets/images/menu-5.png";
import menuImage6 from "../assets/images/menu-6.png";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          <div className="box" >
            <img src={menuImage1} alt="" />
            <h3>tasty and healty</h3>
            <div className="price"><span>199 TK.</span></div>
            <div className="btn">
              159 <span>TK.</span>
            </div>
          </div>
          <div className="box" >
            <img src={menuImage2} alt="" />
            <h3>tasty and healty</h3>
            <div className="price"><span>259 TK.</span></div>
            <div className="btn">
              229 <span>TK.</span>
            </div>
          </div>
          <div className="box" >
            <img src={menuImage3} alt="" />
            <h3>tasty and healty</h3>
            <div className="price"><span>329 TK.</span></div>
            <div className="btn">
              299 <span>TK.</span>
            </div>
          </div>
          <div className="box" >
            <img src={menuImage4} alt="" />
            <h3>tasty and healty</h3>
            <div className="price"><span>199 TK.</span></div>
            <div className="btn">
              159 <span>TK.</span>
            </div>
          </div>
          <div className="box" >
            <img src={menuImage5} alt="" />
            <h3>tasty and healty</h3>
            <div className="price"><span>199 TK.</span></div>
            <div className="btn">
              159 <span>TK.</span>
            </div>
          </div>
          <div className="box" >
            <img src={menuImage6} alt="" />
            <h3>tasty and healty</h3>
            <div className="price"><span>199 TK.</span></div>
            <div className="btn">
              159 <span>TK.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
