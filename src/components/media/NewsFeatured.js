import React from "react";
import "./NewsFeatured.css";

const NewsFeatured = () => {
  return (
    <div className="news_featured_container">
      <p className="news_featured_title titles">Featured News</p>
      <div className="news_featured_card_container">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
      <SocialMedia />
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

const SocialMedia = () => {
  return (
    <div className="news_social_icon_container">
      <p className="news_social_title titles">Follow, Like, Subsribe</p>
      <div className="news_social_icons_box_wrapper">
        <div className="news_social_icons">
          <img src={require("../../assets/facebook.png")} alt="" />
        </div>
        <div className="news_social_icons">
          <img src={require("../../assets/linkedin.png")} alt="" />
        </div>
        <div className="news_social_icons">
          <img src={require("../../assets/twitter.png")} alt="" />
        </div>
        <div className="news_social_icons">
          <img src={require("../../assets/instagram.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsFeatured;
