import React from "react";
import "./VideoCard.css";

const VideoCard = ({ url, thumbnail, onVideoSelect, isSelected }) => {
  return (
    <div>
      <div className="uniqueVideoCard" onClick={() => onVideoSelect(url)}>
        {!isSelected && (
          <>
            <img
            src={thumbnail} // Her video için farklı bir thumbnail gösteriliyor
            alt="Video Thumbnail"
            className="video-thumbnail"
          />
            <div className="video-overlay">
              <img
                src={process.env.PUBLIC_URL + "/iconVideo.svg"}
                alt="Play"
                className="play-icon"
              />
            </div>
          </>
        )}
        {isSelected && (
          <video 
            className="videoWithHeight"
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            width="100%"
            height="100%"
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="loginVideoText">Giriş videosu</div>
    </div>
  );
};

export default VideoCard;
