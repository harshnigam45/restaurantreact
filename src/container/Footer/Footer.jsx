import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FooterOverlay } from "../../components";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding app__bg" >
    <FooterOverlay />

    
    <div className="app__footer-links">
    <div className="app__footer-links_logo">
        <h1>The Hidden Street</h1>
       
        <p className="p__opensans">
         
          "Something Hot,Something Tasty"
        </p>
        
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
         IIT Kharagpur,Kharagpur,West Bengal-721302
        </p>
        <p className="p__opensans">+91 1111111111</p>
        <p className="p__opensans">+91 1111111111</p>
      </div>
     
    </div>
    <div className="app__footer__copyright">
      <p className="Oppo">
        Copyright || TheHiddenStreet || All Rights Reserved
      </p>
    </div>
  </div>
);

export default Footer;
