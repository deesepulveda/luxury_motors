import React from "react";
import "./NewsVideo.css";
import TourVideo from "../../assets/Screen_Recording_20210705-234448_YouTube_Trim_Mercedes.mp4";

const NewsVideo = () => {
  return (
    <div className="news_video_container">
      <video
        src={TourVideo}
        autoPlay="true"
        loop="true"
        muted="true"
        type="video/mp4"
      ></video>
      <div className="news_video_info_container">
        <p className="news_video_info_title">Mercedes News</p>
      </div>
    </div>
  );
};

export default NewsVideo;
