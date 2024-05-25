import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_logo_box">
        <img src={require("../../assets/LM_Logo4.png")} alt="" />
      </div>
      <div className="header_nav">
        <Nav />
      </div>
      <div className="header_user_box">
        <img src={require("../../assets/LM_user_icon.png")} alt="" />
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <ul className="header_nav_ul">
      <li>home</li>
      <li>cars</li>
      <li>about</li>
      <li>contact</li>
    </ul>
  );
};

export default Header;
