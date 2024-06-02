import React from "react";
import "./Marketing.css";
import NewsLetter from "./NewsLetter";

const Marketing = () => {
  return (
    <div className="marketing_container">
      <div className="marketing_card_wrapper">
        <MarketingCard title="showroom" listings="lorem ipsum" />
        <MarketingCard title="leasing" listings="lorem ipsum" />
        <MarketingCard title="concierge" listings="lorem ipsum" />
      </div>
      <NewsLetter />
    </div>
  );
};

const MarketingCard = ({ title, listings }) => {
  return (
    <div className="card_container">
      <div className="card_title">{title}</div>
      <div className="card_marketing_content_container">
        <div className="card_marketing_content_lists">
          <div className="content_lists_diamond"></div>
          <div>{listings}</div>
        </div>
        <div className="card_marketing_content_lists">
          <div className="content_lists_diamond"></div>
          <div>{listings}</div>
        </div>
        <div className="card_marketing_content_lists">
          <div className="content_lists_diamond"></div>
          <div>{listings}</div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
