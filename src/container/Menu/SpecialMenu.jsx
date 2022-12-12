import React from "react";
import {data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding " id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="OUR MENU" />
      <h1 className="headtext__cormorant"> Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__speacialMenu-menu_wine flex__center">
        <p className="app__speacialMenu-menu_heading">Indian Cuisine</p>
        <div className="app__specialMenu-menu_items">
          {data.food.map((food, index) => (
            <MenuItem
              title={food.title}
              price={food.price}
            />
          ))}
        </div>
      </div>
      <div className="app__speacialMenu-menu_wine flex__center">
        <p className="app__speacialMenu-menu_heading">American Cuisine</p>
        <div className="app__specialMenu-menu_items">
          {data.food1.map((food1, index) => (
            <MenuItem
              title={food1.title}
              price={food1.price}
            />
          ))}
        </div>
      </div>


      <div className="app__speacialMenu-menu_cocktail flex__center">
        <p className="app__speacialMenu-menu_heading">Italian Cuisine</p>
        <div className="app__specialMenu-menu_items">
          {data.food2.map((food2, index) => (
            <MenuItem
              title={food2.title}
              price={food2.price}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="app__speacialMenu-button">
      <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
