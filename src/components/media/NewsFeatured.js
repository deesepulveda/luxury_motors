import React from "react";
import "./NewsFeatured.css";

const NewsFeatured = () => {
  return (
    <div className="news_featured_container">
      <p className="news_featured_title titles">Featured News</p>
      <div className="news_featured_card_container">
        <FeaturedCard title="citrus audi" img="audir8orange" />
        <FeaturedCard title="bmw dominates" img="bmw18front" />
        <FeaturedCard title="audi updates" img="audir8greenfullback" />
      </div>
      <SocialMedia />
    </div>
  );
};

const FeaturedCard = ({ title, img }) => {
  return (
    <div className="featured_card_box">
      <img src={require(`../../assets/${img}.jpg`)} alt="" />
      <div className="img_overlay">
        <p className="news_content_title">{title}</p>
        <div className="news_content_info">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
        <button>Read More</button>
      </div>
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
