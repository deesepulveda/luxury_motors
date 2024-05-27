import React from "react";
import "./Hero.css";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="hero_container">
      <Header />
      <div className="hero_content_container">
        <div className="hero_content_top">
          <div className="hero_content_top_main">
            <div className="hero_content_top_bg">
              <img
                src={require("../../assets/LM_Logo4.png")}
                alt="luxury motors official logo"
              />
            </div>
            <div className="hero_content_top_title">
              <img src={require("../../assets/luxury_text.png")} alt="" />
              <img src={require("../../assets/motors_text.png")} alt="" />
            </div>
          </div>
          <div className="hero_content_top_sub">
            <p className="subtitle_text subtitle_text_top">german // luxury</p>
            <p className="subtitle_text subtitle_text_bottom">automotive</p>
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
