import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";
const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Feel The Joy of MouthWatering Food" />
        <p className="p__opensans app__header-p">
          “A restaurant is a fantasy—a kind of living fantasy in which diners are the most important members of the cast.”
        </p>
        <button className="custom__button header__button">Explore Now</button>
      </div>
      <div className="app__wrapper_img"> <img src={images.restaurantharsh} alt="restaurantharsh" className="restaurantharsh__img" /></div>
     
    </div>
  );
};

export default Header;
