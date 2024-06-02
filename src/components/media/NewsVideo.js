import React from "react";
import "./NewsVideo.css";
import TourVideo from "../../assets/Screen_Recording_20210705-234448_YouTube_Trim_Mercedes.mp4";

const NewsVideo = () => {
  return (
    <div className="news_video_container">
      <video
        src={TourVideo}
        autoPlay={true}
        loop={true}
        muted={true}
        type="video/mp4"
      ></video>
      <div className="news_video_info_container">
        <div className="news_video_info_box">
          <p className="news_video_info_title">Showroom Tour</p>
          <p className="news_video_info_lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempore
            veniam cupiditate exercitationem?
          </p>
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default NewsVideo;
