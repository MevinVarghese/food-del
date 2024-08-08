import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h3>BRANDMART</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            dignissimos incidunt. Repellendus porro, doloremque sunt ipsum
            magnam minus iusto reprehenderit odio assumenda iste autem quos
            voluptate repellat eum expedita? Tempore.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h5>COMPANY</h5>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h5>GET IN TOUCH</h5>
          <ul>
            <li>+1-256-706-8410</li>
            <li>contact@brandmart.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Brandmart.com - All right Reserved.
      </p>
    </div>
  );
};

export default Footer;
