import React from "react";
import "./Listing.css";

const Listing = () => {
  return (
    <div className="listing_container">
      <div className="filter_container">Filter Section</div>
      <div className="card_listing_container">
        <AutoListCard />
        <AutoListCard />
        <AutoListCard />
        <AutoListCard />
      </div>
    </div>
  );
};

const AutoListCard = () => {
  return (
    <div className="auto_list_card_box">
      <div className="auto_list_card_box_content"></div>
    </div>
  );
};

export default Listing;
