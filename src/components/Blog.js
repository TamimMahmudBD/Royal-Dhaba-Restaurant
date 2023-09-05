import React from "react";
import blogImage1 from "../assets/images/blog-1.jpeg";
import blogImage2 from "../assets/images/blog-2.jpeg";
import blogImage3 from "../assets/images/blog-3.jpeg";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <div class="image">
              <img src={blogImage1} alt="" />
            </div>
            <div class="content">
              <a href="https://www.seriouseats.com/hasselback-potato-gratin-casserole-holiday-food-lab" class="title" target="_blank" rel="noreferrer">
              Hasselback Potato Gratin Recipe
              </a>
              <span>by admin / 21st may, 2023</span>
              <p>
              Every food recipe trend has its watershed moment, the point at which it goes from being a fun project to going full-on viral.
              </p>
              <a href="https://www.seriouseats.com/hasselback-potato-gratin-casserole-holiday-food-lab" class="btn" target="_blank" rel="noreferrer">
                read more
              </a>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img src={blogImage3} alt="" />
            </div>
            <div class="content">
              <a href="https://www.seriouseats.com/how-to-bake-with-choose-freeze-strawberries" class="title" target="_blank" rel="noreferrer">
              How to Select, Freeze, and Bake with Strawberries
              </a>
              <span>by admin / 22st jun, 2023</span>
              <p>
              Have you finally retired your scarf and gloves and are itching to get in the kitchen to start whipping up some summery delights?
                dicta.
              </p>
              <a href="https://www.seriouseats.com/how-to-bake-with-choose-freeze-strawberries" class="btn" target="_blank" rel="noreferrer">
                read more
              </a>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img src={blogImage2} alt="" />
            </div>
            <div class="content">
              <a href="https://www.seriouseats.com/how-to-tenderize-steak-7963134" class="title" target="_blank" rel="noreferrer">
              How to Most Effectively Tenderize Steak
              </a>
              <span>by admin / 25st aug, 2023</span>
              <p>
              The idea of earning your keep is nothing new. Paul the Apostle said as much in his letter to the Thessalonians:
              </p>
              <a href="https://www.seriouseats.com/how-to-tenderize-steak-7963134" class="btn" target="_blank" rel="noreferrer">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
