import React from "react";
import "./NewsLetter.css";

const NewsLetter = ({ newsLetterRef }) => {
  return (
    <div className="newsletter_container" ref={newsLetterRef}>
      <div className="newsletter_email_container">
        <div className="newsletter_user">
          <div className="newsletter_user_label">Newsletter Sign Up</div>
          <div className="newsletter_user_input">
            <input type="text" placeholder="Email" />
            <button>submit</button>
          </div>
        </div>
        <div className="newsletter_listings">
          <div className="card_newsletter_content_lists">
            <div className="content_lists_diamond"></div>
            <div>New Listings</div>
          </div>
          <div className="card_newsletter_content_lists">
            <div className="content_lists_diamond"></div>
            <div>Inventory Deals</div>
          </div>
          <div className="card_newsletter_content_lists">
            <div className="content_lists_diamond"></div>
            <div>Showroom Tour Dates</div>
          </div>
        </div>
      </div>
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
