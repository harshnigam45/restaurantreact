import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <h3 className="p__opensan">
        
          SERVED EVERY DAY SINCE 2002
          </h3>

          <h4 className="Harsh">The Hidden Street opened on Thanksgiving Day 2002. 
           We began making fast food in a small kitchen at the corner of M.G Street. 
           </h4>
           <h4 className="Harsh">Today,Our beloved restaurant is one of the best Restaurant in India.
        </h4>
        
        <button className="custom__button_know__more"> Know More </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">

      </div>
   
    </div>
  </div>
);

export default AboutUs;
