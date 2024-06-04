import React from "react";
import "./AutoListCard.css";

const AutoListCard = ({ title }) => {
  return (
    <div className="auto_list_card_box">
      <div className="auto_list_card_box_content">{title}</div>
    </div>
  );
};

export default AutoListCard;
