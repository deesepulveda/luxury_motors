import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter_container">
      <div></div>
      <div className="newsletter_bg_container">
        <div className="newsletter_bg_pattern"></div>
        <div className="newsletter_bg_image">
          <img src={require("../../assets/mercedes_wagon.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
