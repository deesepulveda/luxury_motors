import React from "react";
import "./Hero.css";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="hero_container">
      <Header />
      <div className="hero_content_container">
        <div className="hero_content_top">
          <div className="hero_content_title_main">
            <img src={require("../../assets/luxury_text.png")} alt="" />
            <img src={require("../../assets/motors_text.png")} alt="" />
          </div>
          <div className="hero_content_title_sub">
            <img src={require("../../assets/subtitle_text.png")} alt="" />
          </div>
        </div>
        <div className="hero_content_bottom">
          <button className="btns btn_explore">explore</button>
          <button className="btns btn_tour">tour</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
