import React from "react";
import "./NewsFeatured.css";

const NewsFeatured = () => {
  return (
    <div className="news_featured_container">
      <p className="news_featured_title">Featured News</p>
      <div className="news_featured_card_container">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
      <div className="news_social_icon_container">social media</div>
    </div>
  );
};

const FeaturedCard = () => {
  return (
    <div className="featured_card_box">
      <img src={require("../../assets/audirs6avant.jpg")} alt="" />
    </div>
  );
};
export default NewsFeatured;
