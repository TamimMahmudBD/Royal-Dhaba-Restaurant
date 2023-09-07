import React from "react";
// import { menu } from "../Data";
import menuImage1 from "../assets/images/menu-1.png";
// import menuImage2 from "../assets/images/menu-2.png";
// import menuImage3 from "../assets/images/menu-3.png";
// import menuImage4 from "../assets/images/menu-4.png";
// import menuImage5 from "../assets/images/menu-5.png";
// import menuImage6 from "../assets/images/menu-6.png";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
        <div className="main-box box-container">
          <div className="box main-sub-box">
            <div className="menu-box-header"><h2>BUFFET MENU</h2></div>
            <div className="sub-menu-box" >
              <div className="sub-menu-item">
                <div className="internal-menu-header"> MenuName</div>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
              </div>
              <br />
              <div className="sub-menu-item">
                <div className="internal-menu-header"> MenuName</div>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
              </div>
              <br />
              <div className="sub-menu-item">
                <div className="internal-menu-header"> MenuName</div>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
              </div>
              <br />
              <div className="sub-menu-item">
                <div className="internal-menu-header"> MenuName</div>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
              </div>
              <br />
              <div className="sub-menu-item">
                <div className="internal-menu-header"> MenuName</div>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
                <li>Demo Text for this point</li>
              </div>
            </div>
          </div>
          <div className="box main-sub-box">
            <div className="menu-box-header"><h2>TAKE WAY BOX</h2></div>
            <div className="sub-menu-box" >
              <div className="sub-menu-item">
                <div className="menu-box-header "><h2>MENU: 1</h2></div>
                <br />
                <h5>DHAKA CATERING SERVICE</h5>
                <h5>DHAKA CATERING SERVICE</h5>
                <h5>DHAKA CATERING SERVICE</h5>
                
              </div>
            </div>
            <div className="sub-menu-box" >
              <div className="sub-menu-item">
                <div className="menu-box-header "><h2>MENU: 2</h2></div>
                <br />
                <h5>DHAKA CATERING SERVICE</h5>
                <h5>DHAKA CATERING SERVICE</h5>
                <h5>DHAKA CATERING SERVICE</h5>
              </div>
            </div>
            <div className="sub-menu-box" >
              <div className="sub-menu-item">
                <div className="menu-box-header "><h2>MENU: 3</h2></div>
                <br />
                <h5>DHAKA CATERING SERVICE</h5>
                <h5>DHAKA CATERING SERVICE</h5>
                <h5>DHAKA CATERING SERVICE</h5>
              </div>
            </div>

            {/*<div className="box" >
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
           </div>*/}
          </div>
          <div className="box main-sub-box">
            <div className="sub-menu-box" >
              <img src={menuImage1} alt="" />
            </div>
            <div className="menu-box-header"><h2>DHAKA CATERING SERVICE</h2></div>
            <br />
            <div className="sub-menu-box">
              <div className="menu-box-header"><h2>We are offering</h2></div>
                <h3>DHAKA CATERING SERVICE</h3>
                <h3>DHAKA CATERING SERVICE</h3>
                <h3>DHAKA CATERING SERVICE</h3>
            </div>
            <div className="menu-short-bio">
              <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt enim facere quaerat ad labore est maiores distinctio fugiat nihil odio atque nulla blanditiis obcaecati illum ratione quae alias, a accusantium adipisci. Nesciunt explicabo error.</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
