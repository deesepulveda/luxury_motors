import React from "react";
import "./AutoListCard.css";

const AutoListCard = ({
  carMake,
  carModel,
  carYear,
  carPrice,
  carTurbo,
  carHp,
}) => {
  return (
    <div className="auto_list_card_box">
      <div className="auto_list_card_box_content">
        <div className="auto_list_card_box_content_year">{carYear}</div>
        <div className="auto_list_card_box_content_image">
          <img src={require("../../assets/audis3.jpg")} alt="" />
        </div>
        <div className="auto_list_card_box_content_info">
          <div className="content_make content_info">{carMake}</div>
          <div className="content_model content_info">{carModel}</div>
          <div className="content_info">{carHp}</div>
          <div className="content_info">{carTurbo}</div>
        </div>
        <div className="auto_list_card_box_content_price">
          <button>view</button>
          <div>{carPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default AutoListCard;
