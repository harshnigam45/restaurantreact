import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding ">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      
      <img src={images.chef2} alt="chef2"/>
    </div>
    <div className="app__wrapper_info" >
      <SubHeading title="CHEF'S WORD" />
      <h1 className="harshnigam"> What Our Chefs Say</h1>
      <div className="app__chef-content">
      
       
        <p className="harsh1" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Temporibus ea deserunt aperiam quis ut, consectetur, laboriosam, dolores omnis aut placeat dolore? 
        Veritatis deserunt maxime necessitatibus laudantium repellendus dignissimos veniam odit rerum reiciendis,
         nostrum ducimus labore ea quae ut . </p>
      </div>
     
    </div>
  </div>
);

export default Chef;
