import React from "react";
import "./Marketing.css";

const Marketing = () => {
  return (
    <div className="marketing_container">
      <div className="marketing_card_wrapper">
        <MarketingCard title="showroom" />
        <MarketingCard title="leasing" />
        <MarketingCard title="concierge" />
      </div>
      <div className="marketing_newsletter_container">newsletter</div>
    </div>
  );
};

const MarketingCard = ({ title }) => {
  return (
    <div className="card_container">
      <div className="card_title">{title}</div>
    </div>
  );
};

export default Marketing;
